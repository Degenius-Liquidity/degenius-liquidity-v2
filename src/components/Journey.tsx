import { useEffect, useRef, useState } from 'react'

type Milestone = {
  label: string
  points: string[]
  variant?: 'current' | 'goal'
}

const milestones: Milestone[] = [
  { label: '2021', points: ['Started trading crypto.', 'Made every mistake imaginable.'] },
  { label: '2024', points: ['Discovered futures and prop firms.', 'Realised consistency mattered more than excitement.'] },
  { label: '2026', points: ['Committed to becoming a full-time trader.'] },
  { label: 'Today', points: ['Trading NQ.', 'Building funded accounts.', 'Sharing everything publicly.'], variant: 'current' },
  { label: 'Next Goal', points: ['Repeatable execution.', 'A process that still works after losing weeks.'], variant: 'goal' },
]

function Journey() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(() => milestones.map(() => false))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.index)
          setVisible((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' })

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">The Journey</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">The Road to Full-Time</h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0
              const isVisible = visible[index]
              const dotClass = milestone.variant === 'current' ? 'bg-accent-green' : milestone.variant === 'goal' ? 'border border-text-secondary bg-bg' : 'bg-text-secondary'

              return (
                <div key={milestone.label} ref={(el) => { itemRefs.current[index] = el }} data-index={index} className={`relative flex items-start gap-6 md:gap-10 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <span className={`absolute left-4 top-6 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full md:left-1/2 ${dotClass}`}></span>

                  <div className={`w-full pl-12 transition-all duration-700 ease-out md:flex-1 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="inline-block w-full rounded-2xl border border-border bg-surface p-6 text-left md:max-w-sm">
                      <p className="font-display text-lg font-semibold text-text-primary">{milestone.label}</p>
                      <div className="mt-3 flex flex-col gap-1.5">
                        {milestone.points.map((point) => (
                          <p key={point} className="text-sm leading-relaxed text-text-secondary">{point}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:flex-1"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
