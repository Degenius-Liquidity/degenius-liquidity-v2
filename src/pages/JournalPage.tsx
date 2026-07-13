import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JournalFilters from '../components/JournalFilters'
import JournalPageCard from '../components/JournalPageCard'
import { getFeaturedJournalEntry, getJournalFilterOptions, getPublishedJournalEntries } from '../content/journal/journalLoader'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function JournalPage() {
  useDocumentMeta({
    title: 'Trading Journal - Degenius Liquidity',
    description: 'A chronological archive of trade reviews, lessons and honest reflections from the journey towards consistent profitability.',
  })

  const [search, setSearch] = useState('')
  const [model, setModel] = useState('All Models')
  const [market, setMarket] = useState('All Markets')
  const [tag, setTag] = useState('All Tags')

  const allEntries = useMemo(() => getPublishedJournalEntries(), [])
  const featuredEntry = useMemo(() => getFeaturedJournalEntry(), [])
  const filterOptions = useMemo(() => getJournalFilterOptions(allEntries), [allEntries])

  const filteredEntries = useMemo(() => {
    const query = search.trim().toLowerCase()

    return allEntries.filter((entry) => {
      const matchesSearch = query.length === 0 || entry.title.toLowerCase().includes(query) || entry.summary.toLowerCase().includes(query)
      const matchesModel = model === 'All Models' || entry.model === model
      const matchesMarket = market === 'All Markets' || entry.market === market
      const matchesTag = tag === 'All Tags' || entry.tags.includes(tag)

      return matchesSearch && matchesModel && matchesMarket && matchesTag
    })
  }, [allEntries, search, model, market, tag])

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(() => filteredEntries.map(() => false))

  useEffect(() => {
    setVisible(filteredEntries.map(() => false))
    cardRefs.current = []
  }, [filteredEntries])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisible(filteredEntries.map(() => true))
      return
    }

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
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filteredEntries])

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <section className="w-full px-4 pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Journal</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Trading Journal</h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">An archive documenting my path to consistent profitability, one entry at a time. Trade reviews, lessons and honest reflections.</p>
          </div>

          {featuredEntry ? (
            <div className="mt-16">
              <JournalPageCard entry={featuredEntry} featured />
            </div>
          ) : null}

          <div className="mt-16 border-t border-border pt-10">
            <JournalFilters
              search={search}
              onSearchChange={setSearch}
              model={model}
              onModelChange={setModel}
              market={market}
              onMarketChange={setMarket}
              tag={tag}
              onTagChange={setTag}
              models={filterOptions.models}
              markets={filterOptions.markets}
              tags={filterOptions.tags}
            />
          </div>

          <div className="mt-12">
            {filteredEntries.length === 0 ? (
              <p className="py-16 text-center text-sm text-text-secondary">No entries match your filters yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {filteredEntries.map((entry, index) => (
                  <div
                    key={entry.slug}
                    ref={(el) => { cardRefs.current[index] = el }}
                    data-index={index}
                    style={{ transitionDelay: visible[index] ? `${(index % 3) * 100}ms` : '0ms' }}
                    className={`transition-all duration-700 ease-out ${visible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  >
                    <JournalPageCard entry={entry} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JournalPage
