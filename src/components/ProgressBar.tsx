type ProgressBarProps = {
  percent: number
  startLabel?: string
  endLabel?: string
}

function ProgressBar({ percent, startLabel, endLabel }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-text-secondary">
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-border bg-bg">
        <div className="h-full rounded-full bg-text-primary transition-all duration-700 ease-out" style={{ width: `${clamped}%` }}></div>
      </div>
      <p className="mt-2 text-xs text-text-secondary">{clamped}% complete</p>
    </div>
  )
}

export default ProgressBar
