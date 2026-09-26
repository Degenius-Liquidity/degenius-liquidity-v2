import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function NotFoundPage() {
  useDocumentMeta({
    title: 'Page not found | Degenius Liquidity',
    description: 'This page does not exist on the Degenius Liquidity site.',
    path: '/404',
  })

  return (
    <Layout>
      <section className="w-full px-4 py-24 md:py-32">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary">Page not found</h1>
          <p className="mt-4 text-base text-text-secondary">That URL is not part of the journal, toolkit or about pages.</p>
          <Link to="/" className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
            Back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
