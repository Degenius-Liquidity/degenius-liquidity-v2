import { Link } from 'react-router-dom'
import PlayBitBlock from './PlayBitBlock'

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
            {['NQ futures', 'UK based', 'Prop-firm trader', 'London & New York'].map((badge) => (
              <span key={badge} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/journal"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
            >
              Read the journal
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PlayBitBlock />
        </div>
      </div>
    </section>
  )
}

export default Hero
