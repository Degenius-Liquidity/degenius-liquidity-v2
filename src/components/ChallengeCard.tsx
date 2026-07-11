import { challenge } from '../data/challenge'
import ProgressBar from './ProgressBar'

function ChallengeCard() {
  const rows = [
    { label: 'Goal', value: challenge.goal },
    { label: 'Current P&L', value: challenge.currentPnl },
    { label: 'Target', value: challenge.target },
    { label: 'Trading Models', value: challenge.tradingModels },
  ]

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 md:p-12">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">{challenge.title}</h3>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
          {challenge.status}
        </span>
      </div>

      <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{challenge.subtitle}</p>

      <div className="mt-6 flex flex-col">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between border-b border-border py-3 last:border-0">
            <span className="text-sm text-text-secondary">{row.label}</span>
            <span className="text-sm font-medium text-text-primary">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Current Focus</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {challenge.currentFocus.map((item) => (
            <span key={item} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">{item}</span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <ProgressBar percent={challenge.progressPercent} startLabel={challenge.currentPnl} endLabel={challenge.target} />
      </div>

      <p className="mt-6 flex-1 text-sm leading-relaxed text-text-secondary">{challenge.closingNote}</p>
    </div>
  )
}

export default ChallengeCard
