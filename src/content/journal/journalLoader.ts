export type JournalEntry = {
  slug: string
  date: string
  market: string
  model: string
  result: string
  draft: boolean
  title: string
  summary: string
  lesson: string
  readingTime: string
  tags: string[]
  bodyHtml: string
}

type RawFrontmatter = {
  date?: string
  market?: string
  model?: string
  result?: string
  draft?: string
}

function parseFrontmatter(raw: string): { data: RawFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    return { data: {}, body: raw.trim() }
  }

  const [, frontmatterBlock, body] = match
  const data: RawFrontmatter = {}

  frontmatterBlock.split(/\r?\n/).forEach((line) => {
    const lineMatch = line.match(/^([a-zA-Z]+):\s*(.*)$/)
    if (!lineMatch) return
    const key = lineMatch[1].trim()
    let value = lineMatch[2].trim()
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }
    ;(data as Record<string, string>)[key] = value
  })

  return { data, body: body.trim() }
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderMarkdownBody(body: string): string {
  const paragraphs = body.split(/\r?\n\s*\r?\n/).map((block) => block.trim()).filter(Boolean)

  return paragraphs
    .map((paragraph) => {
      const withLineBreaks = escapeHtml(paragraph).replace(/\r?\n/g, '<br />')
      const withBold = withLineBreaks.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      const withItalic = withBold.replace(/\*(.+?)\*/g, '<em>$1</em>')
      return `<p>${withItalic}</p>`
    })
    .join('')
}

function formatDisplayDate(dateString: string): string {
  const parsed = new Date(`${dateString}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return dateString
  return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function deriveTitle(body: string, dateString: string): string {
  const firstSentenceMatch = body.match(/[^.!?]+[.!?]/)
  const candidate = firstSentenceMatch ? firstSentenceMatch[0].trim() : ''

  if (candidate.length >= 10 && candidate.length <= 90) {
    return candidate
  }

  return `Trading Journal - ${formatDisplayDate(dateString)}`
}

function deriveSummary(body: string): string {
  const firstParagraph = body.split(/\r?\n\s*\r?\n/)[0]?.trim() ?? ''
  const singleLine = firstParagraph.replace(/\r?\n/g, ' ')

  if (singleLine.length <= 160) return singleLine
  return `${singleLine.slice(0, 157).trim()}...`
}

function deriveLesson(body: string): string {
  const lessonMatch = body.match(/main lesson:\s*([^\n]+)/i)
  if (lessonMatch) return lessonMatch[1].trim().replace(/\.$/, '')

  const sentences = body.match(/[^.!?]+[.!?]/g)
  if (sentences && sentences.length > 0) {
    return sentences[sentences.length - 1].trim()
  }

  return 'A lesson worth carrying into the next session.'
}

function deriveReadingTime(body: string): string {
  const wordCount = body.split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(wordCount / 200))
  return `${minutes} min read`
}

const TAG_KEYWORDS: Record<string, string[]> = {
  Psychology: ['anticipat', 'patien', 'discipline', 'fear', 'confiden', 'emotion', 'hesitat', 'plan'],
  'Risk Management': ['stop loss', 'risk', 'position size', 'drawdown', 'protect'],
  'Prop Firms': ['evaluation', 'funded', 'prop firm', 'payout', 'challenge'],
  'Website Build': ['website', 'homepage', 'code', 'deploy'],
  'Behind the Scenes': ['behind the scenes'],
}

function deriveTags(body: string): string[] {
  const lower = body.toLowerCase()
  const matched = Object.entries(TAG_KEYWORDS)
    .filter(([, keywords]) => keywords.some((keyword) => lower.includes(keyword)))
    .map(([tag]) => tag)

  return matched.length > 0 ? matched : ['Reviews']
}

function slugFromPath(path: string): string {
  const fileName = path.split('/').pop() ?? path
  return fileName.replace(/\.md$/, '')
}

const journalModules = import.meta.glob('/src/content/journal/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function loadAllEntries(): JournalEntry[] {
  return Object.entries(journalModules).map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const date = data.date ?? ''

    return {
      slug: slugFromPath(path),
      date,
      market: data.market ?? '',
      model: data.model ?? '',
      result: data.result ?? '',
      draft: data.draft === 'true',
      title: deriveTitle(body, date),
      summary: deriveSummary(body),
      lesson: deriveLesson(body),
      readingTime: deriveReadingTime(body),
      tags: deriveTags(body),
      bodyHtml: renderMarkdownBody(body),
    }
  })
}

export function getPublishedJournalEntries(): JournalEntry[] {
  return loadAllEntries()
    .filter((entry) => !entry.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getFeaturedJournalEntry(): JournalEntry | undefined {
  return getPublishedJournalEntries()[0]
}

export function getJournalEntryBySlug(slug: string): JournalEntry | undefined {
  return getPublishedJournalEntries().find((entry) => entry.slug === slug)
}

export function getJournalFilterOptions(entries: JournalEntry[]): { markets: string[]; models: string[]; tags: string[] } {
  const markets = Array.from(new Set(entries.map((entry) => entry.market).filter(Boolean))).sort()
  const models = Array.from(new Set(entries.map((entry) => entry.model).filter(Boolean))).sort()
  const tags = Array.from(new Set(entries.flatMap((entry) => entry.tags))).sort()

  return { markets, models, tags }
}

export function formatJournalDate(dateString: string): string {
  return formatDisplayDate(dateString)
}
