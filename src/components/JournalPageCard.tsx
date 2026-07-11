import type { JournalPost } from '../data/journalPosts'

type JournalPageCardProps = {
  post: JournalPost
  featured?: boolean
}

function JournalPageCard({ post, featured = false }: JournalPageCardProps) {
  return (
    <div className={`flex h-full flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong md:p-7 ${featured ? 'border-border-strong' : 'border-border'}`}>
      {featured ? (
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
          Featured
        </span>
      ) : null}

      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">{post.date}</p>

      <h3 className={`mt-2 font-display font-semibold leading-snug text-text-primary ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>{post.title}</h3>
      <p className={`mt-3 leading-relaxed text-text-secondary ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>{post.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.markets.map((market) => (
          <span key={market} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{market}</span>
        ))}
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{post.model}</span>
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Result</p>
        <p className="mt-1.5 text-sm text-text-primary">{post.result}</p>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Key Lesson</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-primary">{post.lesson}</p>
      </div>

      <button type="button" className="mt-6 w-fit rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">Read Journal {'->'}</button>
    </div>
  )
}

export default JournalPageCard
