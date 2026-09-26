import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/stats'
import StatCard from './StatCard'
import CurrentJourneyCard from './CurrentJourneyCard'
import ChallengeCard from './ChallengeCard'

function TradingSnapshot() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(() => stats.map(() => false))
  const [panelVisible, setPanelVisible] = useState<boolean>(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCardsVisible(stats.map(() => true))
      setPanelVisible(true)
      return
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.index)
          setCardsVisible((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })
          cardObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' })

    const panelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPanelVisible(true)
          panelObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' })

    cardRefs.current.forEach((el) => {
      if (el) cardObserver.observe(el)
    })

    if (panelRef.current) panelObserver.observe(panelRef.current)

    return () => {
      cardObserver.disconnect()
      panelObserver.disconnect()
    }
  }, [])

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Snapshot</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Trading Snapshot</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">A current overview of how I trade. This is a snapshot of process, not a live P&L feed.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={stat.id} ref={(el) => { cardRefs.current[index] = el }} data-index={index} style={{ transitionDelay: cardsVisible[index] ? `${index * 80}ms` : '0ms' }} className={`transition-all duration-700 ease-out ${cardsVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

        <div ref={panelRef} className={`mt-16 grid grid-cols-1 items-stretch gap-6 transition-all duration-700 ease-out lg:grid-cols-2 lg:gap-8 ${panelVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <CurrentJourneyCard />
          <ChallengeCard />
        </div>
      </div>
    </section>
  )
}

export default TradingSnapshot
