import type { JournalItem } from '../data/journal'

type JournalCardProps = {
  entry: JournalItem
}

function JournalIcon({ icon }: { icon: JournalItem['icon'] }) {
  if (icon === 'notebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-text-secondary">
        <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2"></rect>
        <path d="M6.5 6H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M6.5 9H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M6.5 12H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
      </svg>
    )
  }

  if (icon === 'chart') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-text-secondary">
        <path d="M3 14.5V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M3 14.5H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M5.5 12V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M9 12V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        <path d="M12.5 12V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-text-secondary">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.2"></circle>
      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.2"></circle>
      <circle cx="9" cy="9" r="0.9" fill="currentColor"></circle>
    </svg>
  )
}

function JournalCard({ entry }: JournalCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong md:p-7">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-text-secondary">{entry.category}</span>
        <JournalIcon icon={entry.icon} />
      </div>

      <p className="mt-5 text-xs text-text-secondary">{entry.readingTime}</p>

      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-text-primary">{entry.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{entry.excerpt}</p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <span className="text-xs text-text-secondary">{entry.publishedDate}</span>
        <span className="text-sm font-medium text-text-primary transition-opacity group-hover:opacity-80">Read Article {'->'}</span>
      </div>
    </div>
  )
}

export default JournalCard
