import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { formatJournalDate, usePublishedJournalEntries } from '../content/journal/journalLoader'
import { useDocumentMeta } from '../utils/useDocumentMeta'
import { resultToneClass } from '../utils/resultTone'

function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const { entries, loading } = usePublishedJournalEntries()
  const entry = slug ? entries.find((item) => item.slug === slug) : undefined

  useDocumentMeta({
    title: loading ? 'Journal | Degenius Liquidity' : entry ? `${entry.title} | Degenius Liquidity journal` : 'Entry not found | Degenius Liquidity',
    description: loading ? 'Loading journal entry.' : entry ? entry.summary : 'This journal entry does not exist or is not yet published.',
    path: entry ? `/journal/${entry.slug}` : '/journal',
  })

  if (loading) {
    return (
      <Layout>
        <section className="w-full px-4 py-24 md:py-32">
          <div className="mx-auto w-full max-w-2xl text-center">
            <p className="text-sm text-text-secondary">Loading journal…</p>
          </div>
        </section>
      </Layout>
    )
  }

  if (!entry) {
    return (
      <Layout>
        <section className="w-full px-4 py-24 md:py-32">
          <div className="mx-auto w-full max-w-2xl text-center">
            <h1 className="font-display text-3xl font-semibold text-text-primary">Entry not found</h1>
            <p className="mt-4 text-base text-text-secondary">This journal entry does not exist or is not yet published.</p>
            <Link to="/journal" className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">Back to journal</Link>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <article className="w-full px-4 py-16 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-2xl">
          <Link to="/journal" className="text-sm text-text-secondary transition-colors hover:text-text-primary">{'<-'} Back to journal</Link>

          <p className="mt-8 text-xs font-medium uppercase tracking-wide text-text-secondary">{formatJournalDate(entry.date)}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">{entry.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{entry.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{entry.market}</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{entry.model}</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">{entry.readingTime}</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-6 md:max-w-xs">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Result</p>
              <p className={`mt-1.5 text-sm font-medium ${resultToneClass(entry.result)}`}>{entry.result}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Key lesson</p>
              <p className="mt-1.5 text-sm font-medium text-text-primary">{entry.lesson}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-10 text-base leading-relaxed text-text-secondary md:text-lg [&>p]:mb-4 [&>p:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}></div>

          <Link to="/journal" className="mt-12 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">{'<-'} Back to journal</Link>
        </div>
      </article>
    </Layout>
  )
}

export default JournalArticlePage
