import type { StatItem } from '../data/stats'

type StatCardProps = {
  stat: StatItem
}

function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-border-strong md:p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">{stat.label}</p>
      <p className="mt-3 font-display text-lg font-semibold leading-snug text-text-primary md:text-xl">{stat.value}</p>
    </div>
  )
}

export default StatCard
