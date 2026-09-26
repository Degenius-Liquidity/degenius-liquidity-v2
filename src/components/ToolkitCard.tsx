import type { ToolkitItem } from '../data/toolkitItems'

type ToolkitCardProps = {
  item: ToolkitItem
}

function ToolkitCard({ item }: ToolkitCardProps) {
  const rel = item.isAffiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong md:p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-primary">{item.name}</h3>
        {item.isAffiliate ? (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-secondary">Affiliate</span>
        ) : null}
      </div>

      {item.affiliateCode ? (
        <p className="mt-3 text-xs text-text-secondary">Referral code: <span className="font-medium text-text-primary">{item.affiliateCode}</span></p>
      ) : null}

      <div className="mt-4 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">What I use it for</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-primary">{item.useCase}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-secondary">Why it may help</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.whyUseful}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-secondary">Who it may suit</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.whoItSuits}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-secondary">Honest note</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.honestNote}</p>
      </div>

      {item.url ? (
        <a href={item.url} target="_blank" rel={rel} className="mt-6 w-fit rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
          {item.ctaLabel ?? 'Visit website'}
        </a>
      ) : null}
    </article>
  )
}

export default ToolkitCard
