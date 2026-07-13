import type { ToolkitItem } from '../data/toolkitItems'

type ToolkitCardProps = {
  item: ToolkitItem
}

function ToolkitCard({ item }: ToolkitCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong md:p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-text-primary">{item.name}</h3>
        {item.isAffiliate ? (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-secondary">Affiliate Link</span>
        ) : null}
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">What I Use It For</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-primary">{item.useCase}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-secondary">Why It May Be Useful</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.whyUseful}</p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-secondary">Honest Note</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{item.honestNote}</p>
      </div>

      <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-6 w-fit rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">Visit Website</a>
    </div>
  )
}

export default ToolkitCard
