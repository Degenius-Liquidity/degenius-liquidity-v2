function Hero() {
  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
            Following My Journey to Consistent Profitability
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
            Building My Trading
            <br />
            Business in Public
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              I left full-time employment to pursue futures trading professionally.
              This website documents my funded accounts, payouts, wins, losses and
              the lessons I&apos;m learning along the way.
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
            {['Trading Futures', 'UK Based', '6+ Years Trading', 'Prop Firm Trader'].map((badge) => (
              <span key={badge} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <button type="button" className="rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90">
              Watch My Journey
            </button>
            <button type="button" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
              Explore My Resources
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-7">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
              Today&apos;s Trading
            </p>

            <p className="mt-3 font-display text-4xl font-semibold text-accent-green">
              +$420
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <p className="font-display text-xl font-semibold text-text-primary">
                  2
                </p>
                <p className="mt-1 text-xs text-text-secondary">Trades</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-accent-green">
                  1
                </p>
                <p className="mt-1 text-xs text-text-secondary">Win</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-accent-red">
                  1
                </p>
                <p className="mt-1 text-xs text-text-secondary">Loss</p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                Current Focus
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {['Patience', 'High Probability Setups', 'Consistency'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-text-secondary"></span>
                    <span className="text-sm text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-text-primary transition-opacity hover:opacity-80">
              <span>Latest Journal</span>
              <span aria-hidden="true">{'->'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
