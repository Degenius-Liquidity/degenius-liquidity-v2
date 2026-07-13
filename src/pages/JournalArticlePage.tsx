import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { formatJournalDate, getJournalEntryBySlug } from '../content/journal/journalLoader'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function JournalArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getJournalEntryBySlug(slug) : undefined

  useDocumentMeta({
    title: entry ? `${entry.title} - Degenius Liquidity` : 'Entry Not Found - Degenius Liquidity',
    description: entry ? entry.summary : 'This journal entry does not exist or is not yet published.',
  })

  if (!entry) {
    return (
      <div className="min-h-screen w-full bg-bg">
        <Navbar />
        <section className="w-full px-4 py-24 md:py-32">
          <div className="mx-auto w-full max-w-2xl text-center">
            <h1 className="font-display text-3xl font-semibold text-text-primary">Entry not found</h1>
            <p className="mt-4 text-base text-text-secondary">This journal entry does not exist or is not yet published.</p>
            <Link to="/journal" className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">Back to Journal</Link>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <article className="w-full px-4 py-20 md:py-28">
        <div className="mx-auto w-full max-w-2xl">
          <Link to="/journal" className="text-sm text-text-secondary transition-colors hover:text-text-primary">{'<-'} Back to Journal</Link>

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
              <p className="mt-1.5 text-sm font-medium text-text-primary">{entry.result}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Key Lesson</p>
              <p className="mt-1.5 text-sm font-medium text-text-primary">{entry.lesson}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-10 text-base leading-relaxed text-text-secondary md:text-lg [&>p]:mb-4 [&>p:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}></div>

          <Link to="/journal" className="mt-12 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">{'<-'} Back to Journal</Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default JournalArticlePage
