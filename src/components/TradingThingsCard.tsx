import { Link } from 'react-router-dom'
import { toolkitItems } from '../data/toolkitItems'

function TradingThingsCard() {
  const item = toolkitItems.find((entry) => entry.id === 'tradingthings')
  if (!item) return null
  const rel = item.isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'

  return (
    <section aria-labelledby="tradingthings-heading" className="w-full px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-surface px-7 py-8 md:px-10 md:py-10">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Main platform</p>
          {item.isAffiliate ? (
            <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-secondary">Affiliate</span>
          ) : null}
        </div>
        <h2 id="tradingthings-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary">{item.name}</h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          TradingThings.io is my main trading platform. I connect my Rithmic accounts to it, use its free built-in copy trader to run several prop accounts at once, and journal my trades there.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={item.url} target="_blank" rel={rel} className="inline-flex w-fit items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
            Visit TradingThings.io
          </a>
          <Link to="/toolkit" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            See the full toolkit {'->'}
          </Link>
        </div>
        <p className="mt-3 text-xs text-text-secondary">{item.isAffiliate ? 'Affiliate link.' : 'Not an affiliate link.'}</p>
      </div>
    </section>
  )
}

export default TradingThingsCard
