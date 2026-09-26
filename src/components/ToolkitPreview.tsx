import { Link } from 'react-router-dom'
import { toolkitItems, toolkitPreviewIds, type ToolkitItem } from '../data/toolkitItems'

function ToolkitPreview() {
  const items = toolkitPreviewIds
    .map((id) => toolkitItems.find((item) => item.id === id))
    .filter((item): item is ToolkitItem => item !== undefined)

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Toolkit</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">What I actually use</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">A short list, not a funnel. Each card says whether the link is an affiliate link, and what it will not do for you.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-text-primary">{item.name}</h3>
                {item.isAffiliate ? (
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-secondary">Affiliate</span>
                ) : null}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">{item.useCase}</p>
              {item.affiliateCode ? (
                <p className="mt-4 text-xs text-text-secondary">Code {item.affiliateCode}</p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/toolkit" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
            View the full toolkit {'->'}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ToolkitPreview
