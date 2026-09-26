import { Link } from 'react-router-dom'
import { affiliateMicrocopy, site } from '../data/site'

function Hero() {
  return (
    <section className="w-full px-4 py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
            UK futures · NQ · London &amp; New York
          </div>

          <h1 className="mt-6 font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Building a trading
            <br />
            business in public
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Degenius Liquidity is a UK futures day trader documenting the work: Nasdaq-100 (NQ) first, occasional ES and GC, funded evaluations, and the lessons that actually change how the next session is traded.
            </p>

            <p className="mt-4 text-base font-medium leading-snug text-text-primary md:text-lg">
              No hype.
              <br />
              No fake lifestyle.
              <br />
              Just the real journey.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['NQ futures', 'UK based', 'Prop-firm trader', 'Max 3 trades a day'].map((badge) => (
              <span key={badge} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.playbitClassroom.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              PlayBit
            </a>
            <Link
              to="/journal"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
            >
              Read the journal
            </Link>
          </div>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-text-secondary">{affiliateMicrocopy}</p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-7">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Current evaluation</p>
            <p className="mt-3 font-display text-4xl font-semibold text-text-primary">$3,000 target</p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">Evaluation profit target, not a result. Documented from the start. No invented daily P&amp;L on this page.</p>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <p className="font-display text-xl font-semibold text-text-primary">NQ</p>
                <p className="mt-1 text-xs text-text-secondary">Market</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-text-primary">3</p>
                <p className="mt-1 text-xs text-text-secondary">Max trades</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-text-primary">2</p>
                <p className="mt-1 text-xs text-text-secondary">Stop after losses</p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Current focus</p>
              <div className="mt-4 flex flex-col gap-3">
                {['Patience', 'Confirmation', 'Consistent execution'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-accent"></span>
                    <span className="text-sm text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/journal" className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80">
              <span>Latest journal</span>
              <span aria-hidden="true">{'->'}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
