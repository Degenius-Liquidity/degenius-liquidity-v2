import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { journalFormUrl } from '../data/site'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function JournalAddPage() {
  useDocumentMeta({
    title: 'Add a journal entry | Degenius Liquidity',
    description: 'Write a short session note. The first sentence becomes the title.',
    path: '/journal/add',
  })

  return (
    <Layout>
      <section className="w-full px-4 py-16 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <Link to="/journal" className="text-sm text-text-secondary transition-colors hover:text-text-primary">{'<-'} Back to journal</Link>

          <p className="mt-8 text-xs font-medium uppercase tracking-wide text-text-secondary">Journal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Add an entry</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            A few sentences about the session is enough. Date, market and result sit in the form. The first sentence becomes the title.
          </p>

          {journalFormUrl ? (
            <>
              <a
                href={journalFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
              >
                Open the form
              </a>
              <iframe
                title="Add a journal entry"
                src={journalFormUrl}
                className="mt-10 h-[80vh] w-full rounded-2xl border border-border bg-surface"
              />
            </>
          ) : (
            <div className="mt-12 rounded-2xl border border-border bg-surface px-8 py-14 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Coming later</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary">The form will live here</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
                Once the Google Form URL is set, this page will open it here. Until then the journal stays empty rather than filled with sample P&L.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default JournalAddPage
