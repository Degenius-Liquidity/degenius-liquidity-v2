import { Link } from 'react-router-dom'
import type { JournalEntry } from '../content/journal/journalLoader'
import { formatJournalDate } from '../content/journal/journalLoader'
import { resultToneClass } from '../utils/resultTone'

type JournalPageCardProps = {
  entry: JournalEntry
  featured?: boolean
}

function JournalPageCard({ entry, featured = false }: JournalPageCardProps) {
  return (
    <div className={`flex h-full flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong md:p-7 ${featured ? 'border-border-strong' : 'border-border'}`}>
      {featured ? (
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
          Featured
        </span>
      ) : null}

      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">{formatJournalDate(entry.date)}</p>

      <h3 className={`mt-2 font-display font-semibold leading-snug text-text-primary ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>{entry.title}</h3>
      <p className={`mt-3 leading-relaxed text-text-secondary ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>{entry.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{entry.market}</span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{entry.readingTime}</span>
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Result</p>
        <p className={`mt-1.5 text-sm ${resultToneClass(entry.result)}`}>{entry.result}</p>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Key Lesson</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-primary">{entry.lesson}</p>
      </div>

      <Link to={`/journal/${entry.slug}`} className="mt-6 w-fit rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">Read Journal {'->'}</Link>
    </div>
  )
}

export default JournalPageCard
