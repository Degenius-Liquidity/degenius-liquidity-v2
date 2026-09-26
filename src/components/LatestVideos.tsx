import { site } from '../data/site'

const topics = [
  {
    title: 'Session notes',
    description: 'What I actually did in London or New York — including the sessions I sat out.',
  },
  {
    title: 'Psychology',
    description: 'The leaks that show up when I anticipate instead of waiting for confirmation.',
  },
  {
    title: 'Evaluations',
    description: 'The funded-account process without pretending every week is a payout week.',
  },
]

function LatestVideos() {
  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Short-form</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Notes on TikTok</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            Short clips live on {site.tiktokHandle}. This website is the slower, written record. TikTok is the working notebook.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-2xl border border-border bg-surface p-6 md:p-7">
              <h3 className="font-display text-lg font-semibold text-text-primary">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{topic.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <a
            href={site.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
          >
            Watch on TikTok {'->'}
          </a>
          <p className="text-xs text-text-secondary">Secondary link. The primary education CTA is the PlayBit classroom.</p>
        </div>
      </div>
    </section>
  )
}

export default LatestVideos
