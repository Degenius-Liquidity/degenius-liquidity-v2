import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import JournalFilters from '../components/JournalFilters'
import JournalPageCard from '../components/JournalPageCard'
import JournalComingSoon, { journalPlaceholders } from '../components/JournalComingSoon'
import { getJournalFilterOptions, usePublishedJournalEntries } from '../content/journal/journalLoader'
import { journalFormUrl } from '../data/site'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function JournalPage() {
  useDocumentMeta({
    title: 'Trading journal | UK NQ futures | Degenius Liquidity',
    description: 'A chronological archive of NQ futures trade reviews, lessons and honest reflections. UK day trading journal. Not financial advice.',
    path: '/journal',
  })

  const [search, setSearch] = useState('')
  const [model, setModel] = useState('All Models')
  const [market, setMarket] = useState('All Markets')
  const [tag, setTag] = useState('All Tags')

  const { entries: allEntries, loading } = usePublishedJournalEntries()
  const featuredEntry = allEntries[0]
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
  const [visible, setVisible] = useState<boolean[]>(() => filteredEntries.map(() => true))

  useEffect(() => {
    setVisible(filteredEntries.map(() => true))
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

  const addEntryControl = journalFormUrl ? (
    <div className="mt-8">
      <Link
        to="/journal/add"
        className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5"
      >
        Add an entry
      </Link>
      <p className="mt-3 text-sm text-text-secondary">Takes about a minute. First sentence becomes the title.</p>
    </div>
  ) : null

  return (
    <Layout>
      <section className="w-full px-4 pb-16 pt-16 sm:pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Journal</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Trading Journal</h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">A written trade log is on the way. Until it launches, the layout below is a blurred preview, not real trades.</p>
            {addEntryControl}
          </div>

          {loading ? (
            <p className="mt-24 text-center text-sm text-text-secondary">Loading journal…</p>
          ) : allEntries.length === 0 ? (
            <div className="mt-16">
              <JournalComingSoon>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                  {journalPlaceholders.map((entry) => (
                    <JournalPageCard key={entry.slug} entry={entry} />
                  ))}
                </div>
              </JournalComingSoon>
            </div>
          ) : (
            <div className="mt-16">
            <JournalComingSoon>
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
            </JournalComingSoon>
            </div>
          )}
        </div>
      </section>

    </Layout>
  )
}

export default JournalPage
