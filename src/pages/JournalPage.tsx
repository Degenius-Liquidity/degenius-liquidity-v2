import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import JournalFilters from '../components/JournalFilters'
import JournalPageCard from '../components/JournalPageCard'
import { allMarkets, allModels, allTags, journalPosts } from '../data/journalPosts'

function JournalPage() {
  const [search, setSearch] = useState('')
  const [model, setModel] = useState('All Models')
  const [market, setMarket] = useState('All Markets')
  const [tag, setTag] = useState('All Tags')

  const featuredPost = journalPosts.find((post) => post.featured)

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase()

    return journalPosts.filter((post) => {
      const matchesSearch = query.length === 0 || post.title.toLowerCase().includes(query) || post.summary.toLowerCase().includes(query)
      const matchesModel = model === 'All Models' || post.model === model
      const matchesMarket = market === 'All Markets' || post.markets.includes(market)
      const matchesTag = tag === 'All Tags' || post.tags.includes(tag as never)

      return matchesSearch && matchesModel && matchesMarket && matchesTag
    })
  }, [search, model, market, tag])

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(() => filteredPosts.map(() => false))

  useEffect(() => {
    setVisible(filteredPosts.map(() => false))
    cardRefs.current = []
  }, [filteredPosts])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisible(filteredPosts.map(() => true))
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
  }, [filteredPosts])

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <section className="w-full px-4 pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Journal</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Trading Journal</h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">An archive documenting my path to consistent profitability, one entry at a time. Trade reviews, lessons, prop firm updates and behind the scenes notes.</p>
          </div>

          {featuredPost ? (
            <div className="mt-16">
              <JournalPageCard post={featuredPost} featured />
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
              models={allModels}
              markets={allMarkets}
              tags={allTags}
            />
          </div>

          <div className="mt-12">
            {filteredPosts.length === 0 ? (
              <p className="py-16 text-center text-sm text-text-secondary">No entries match your filters yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    ref={(el) => { cardRefs.current[index] = el }}
                    data-index={index}
                    style={{ transitionDelay: visible[index] ? `${(index % 3) * 100}ms` : '0ms' }}
                    className={`transition-all duration-700 ease-out ${visible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  >
                    <JournalPageCard post={post} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JournalPage
