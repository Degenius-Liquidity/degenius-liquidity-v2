import { useEffect, useState } from 'react'

export type JournalEntry = {
  slug: string
  date: string
  market: string
  result: string
  draft: boolean
  title: string
  summary: string
  lesson: string
  readingTime: string
  tags: string[]
  bodyHtml: string
}

const JOURNAL_SHEET_ID = '1aymcw1jVDYsVy5AZQok2cxFeDrCxRq9vyo0WGKvncNE'

const JOURNAL_SHEET_URLS = [
  `https://docs.google.com/spreadsheets/d/${JOURNAL_SHEET_ID}/gviz/tq?tqx=out:csv`,
  `https://docs.google.com/spreadsheets/d/${JOURNAL_SHEET_ID}/export?format=csv`,
]

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

export function deriveTitle(body: string, dateString: string): string {
  const firstSentenceMatch = body.match(/[^.!?]+[.!?]/)
  const candidate = firstSentenceMatch ? firstSentenceMatch[0].trim() : ''

  if (candidate.length >= 10 && candidate.length <= 140) {
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

export function deriveLesson(body: string): string {
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
  'Prop Firms': ['evaluation', 'funded', 'prop firm', 'payout'],
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

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false
  const source = text.replace(/^\uFEFF/, '')

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i]
    const next = source[i + 1]

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"'
        i += 1
      } else if (char === '"') {
        inQuotes = false
      } else {
        field += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
      continue
    }

    if (char === ',') {
      row.push(field)
      field = ''
      continue
    }

    if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
      continue
    }

    if (char === '\r') {
      continue
    }

    field += char
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows
}

function normalizeHeader(header: string): string {
  return header
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function cell(row: Record<string, string>, ...names: string[]): string {
  for (const name of names) {
    const value = row[normalizeHeader(name)]
    if (value !== undefined) return value.trim()
  }
  return ''
}

function shouldShowOnSite(value: string): boolean {
  const normalized = value.trim().toLowerCase()
  return normalized === '' || normalized === 'yes' || normalized === 'true'
}

function isBlankRow(values: string[]): boolean {
  return values.every((value) => value.trim() === '')
}

function normalizeDate(raw: string): string {
  const value = raw.trim()
  if (!value) return ''

  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10)
  }

  const slash = value.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})/)
  if (slash) {
    const first = Number(slash[1])
    const second = Number(slash[2])
    const year = slash[3]
    const day = first > 12 ? first : second > 12 ? second : first
    const month = first > 12 ? second : second > 12 ? first : second
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const parsed = new Date(value)
  if (!Number.isNaN(parsed.getTime())) {
    const year = parsed.getFullYear()
    const month = String(parsed.getMonth() + 1).padStart(2, '0')
    const day = String(parsed.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return value
}

function slugify(parts: string[], used: Set<string>): string {
  const base = parts
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72) || 'journal-entry'

  let slug = base
  let suffix = 2
  while (used.has(slug)) {
    slug = `${base}-${suffix}`
    suffix += 1
  }
  used.add(slug)
  return slug
}

function looksLikeCsv(text: string): boolean {
  const sample = text.trimStart()
  if (!sample || sample.startsWith('<') || sample.startsWith('{') || sample.startsWith('/*') || sample.startsWith('google.visualization')) {
    return false
  }
  return /date/i.test(sample) || sample.includes(',')
}

async function fetchSheetCsv(): Promise<string> {
  let lastError: Error | null = null

  for (const url of JOURNAL_SHEET_URLS) {
    try {
      const response = await fetch(url, { cache: 'no-store' })
      if (!response.ok) {
        lastError = new Error(`Sheet request failed (${response.status})`)
        continue
      }

      const text = await response.text()
      if (!looksLikeCsv(text)) {
        lastError = new Error('Sheet response was not CSV')
        continue
      }

      return text
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Sheet request failed')
    }
  }

  throw lastError ?? new Error('Unable to load journal sheet')
}

function entriesFromCsv(csv: string): JournalEntry[] {
  const table = parseCsv(csv)
  if (table.length < 2) return []

  const headers = table[0].map(normalizeHeader)
  const usedSlugs = new Set<string>()
  const entries: JournalEntry[] = []

  table.slice(1).forEach((rawRow) => {
    if (isBlankRow(rawRow)) return

    const row: Record<string, string> = {}
    headers.forEach((header, index) => {
      row[header] = rawRow[index] ?? ''
    })

    if (!shouldShowOnSite(cell(row, 'show on site'))) return

    const date = normalizeDate(cell(row, 'date'))
    const market = cell(row, 'market')
    const result = cell(row, 'result')
    const body = cell(row, 'what happened')
    const mainLesson = cell(row, 'main lesson')

    if (!date && !body) return

    const title = deriveTitle(body, date)
    const lesson = mainLesson || deriveLesson(body)
    const tagSource = [body, lesson].filter(Boolean).join('\n')

    entries.push({
      slug: slugify([date, market, title], usedSlugs),
      date,
      market,
      result,
      draft: false,
      title,
      summary: deriveSummary(body),
      lesson,
      readingTime: deriveReadingTime(body),
      tags: deriveTags(tagSource),
      bodyHtml: renderMarkdownBody(body),
    })
  })

  return entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

let publishedEntriesPromise: Promise<JournalEntry[]> | null = null

export function loadPublishedJournalEntries(): Promise<JournalEntry[]> {
  if (!publishedEntriesPromise) {
    publishedEntriesPromise = fetchSheetCsv()
      .then(entriesFromCsv)
      .catch((error) => {
        console.error('Journal sheet could not be loaded.', error)
        return []
      })
  }

  return publishedEntriesPromise
}

export async function getPublishedJournalEntries(): Promise<JournalEntry[]> {
  return loadPublishedJournalEntries()
}

export async function getFeaturedJournalEntry(): Promise<JournalEntry | undefined> {
  const entries = await loadPublishedJournalEntries()
  return entries[0]
}

export async function getJournalEntryBySlug(slug: string): Promise<JournalEntry | undefined> {
  const entries = await loadPublishedJournalEntries()
  return entries.find((entry) => entry.slug === slug)
}

export function usePublishedJournalEntries(): { entries: JournalEntry[]; loading: boolean } {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    loadPublishedJournalEntries().then((data) => {
      if (!active) return
      setEntries(data)
      setLoading(false)
    })

    return () => {
      active = false
    }
  }, [])

  return { entries, loading }
}

export function getJournalFilterOptions(entries: JournalEntry[]): { markets: string[]; tags: string[] } {
  const markets = Array.from(new Set(entries.map((entry) => entry.market).filter(Boolean))).sort()
  const tags = Array.from(new Set(entries.flatMap((entry) => entry.tags))).sort()

  return { markets, tags }
}

export function formatJournalDate(dateString: string): string {
  return formatDisplayDate(dateString)
}
