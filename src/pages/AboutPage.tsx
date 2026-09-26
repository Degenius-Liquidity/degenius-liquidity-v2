import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { affiliateMicrocopy, site } from '../data/site'
import { useDocumentMeta } from '../utils/useDocumentMeta'

const principles = [
  {
    title: 'Honest process',
    body: 'Wins, losses and skipped sessions belong in public. Invented P&L does not.',
  },
  {
    title: 'One market first',
    body: 'NQ is the main book. ES and GC appear when they earn a place, not to look busy.',
  },
  {
    title: 'Trading before content',
    body: 'Trading is not altered to fill a content calendar.',
  },
]

function AboutPage() {
  useDocumentMeta({
    title: 'About | Degenius Liquidity, UK futures day trader',
    description: 'Degenius Liquidity is a UK futures day trader documenting NQ, prop-firm evaluations, funded accounts and the work of building a durable process. Faceless. No guru pitch.',
    path: '/about',
  })

  return (
    <Layout>
      <section className="w-full px-4 py-16 sm:py-20 md:py-28">
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">About</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">The journey so far</h1>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Degenius Liquidity documents the real process of building a sustainable futures trading business from the United Kingdom.
            </p>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              The public work is the trading: prop-firm evaluations, funded accounts, psychology, missed trades, and the slow construction of a process that can survive both winning and losing weeks.
            </p>
            <p className="text-base font-medium leading-relaxed text-text-primary md:text-lg">
              I will not always get the market right, but I will be honest about the trading journey.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface p-5">
                <h2 className="font-display text-base font-semibold text-text-primary">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">At a glance</h2>
          <dl className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {[
              ['Primary market', 'NQ (Nasdaq-100 futures)'],
              ['Occasional markets', site.occasionalMarkets],
              ['Sessions', site.sessions],
              ['Base', site.location],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-xs font-medium uppercase tracking-wide text-text-secondary">{label}</dt>
                <dd className="text-sm text-text-primary sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="w-full px-4 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">What this site is</h2>
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-text-secondary md:text-lg">
            <p>A public journal and a toolkit page. The writing is meant to be useful even when the week is not.</p>
            <p>The brand is faceless on purpose. There is no owner portrait, no influencer grid, and no staged lifestyle photography here.</p>
          </div>

          <h2 className="mt-14 font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">What this site is not</h2>
          <ul className="mt-6 flex flex-col gap-3 text-base leading-relaxed text-text-secondary md:text-lg">
            <li>Not a payout mill or a countdown to riches.</li>
            <li>Not a prediction-market product.</li>
            <li>Not financial advice.</li>
            <li>Not a claim that PlayBit bots produce prop-firm payouts.</li>
          </ul>
        </div>
      </section>

      <section className="w-full px-4 pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary">Education</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            The classroom I point people to is PlayBit. It is the primary education recommendation on this site. It is an affiliate link.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.playbitClassroom.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Join the PlayBit classroom
            </a>
            <Link to="/toolkit" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
              See the toolkit
            </Link>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-text-secondary">{affiliateMicrocopy}</p>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Follow</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent transition-opacity hover:opacity-80">TikTok {site.tiktokHandle}</a>
              <a href={site.linktreeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent transition-opacity hover:opacity-80">Linktree</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
