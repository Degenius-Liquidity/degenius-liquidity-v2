import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePublishedJournalEntries } from '../content/journal/journalLoader'
import JournalPageCard from './JournalPageCard'
import JournalComingSoon, { journalPlaceholders } from './JournalComingSoon'

function FeaturedJournal() {
  const { entries: allEntries } = usePublishedJournalEntries()
  const entries = useMemo(() => (allEntries.length ? allEntries : journalPlaceholders).slice(0, 3), [allEntries])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(() => entries.map(() => true))

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisible(entries.map(() => true))
      return
    }

    const observer = new IntersectionObserver((entriesObserved) => {
      entriesObserved.forEach((entry) => {
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

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [entries])

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Journal</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Trading journal</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">The trade log is not live yet. The layout below is a preview only.</p>
        </div>

        <JournalComingSoon>
        <div className={`mt-16 grid grid-cols-1 gap-6 md:gap-8 ${entries.length === 1 ? 'md:grid-cols-1 md:max-w-xl md:mx-auto' : entries.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {entries.map((entry, index) => (
            <div
              key={entry.slug}
              ref={(el) => { cardRefs.current[index] = el }}
              data-index={index}
              style={{ transitionDelay: visible[index] ? `${index * 120}ms` : '0ms' }}
              className={`transition-all duration-700 ease-out ${visible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            >
              <JournalPageCard entry={entry} />
            </div>
          ))}
        </div>
        </JournalComingSoon>

        <div className="mt-16 flex justify-center">
          <Link to="/journal" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">
            About the journal {'->'}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJournal
