import { useEffect, useRef, useState } from 'react'
import { videos } from '../data/videos'
import VideoCard from './VideoCard'

function LatestVideos() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState<boolean[]>(() => videos.map(() => false))

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisible(videos.map(() => true))
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
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' })

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Content</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">Latest Videos</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">Follow my trading journey through short daily videos covering funded accounts, payouts, wins, losses, psychology and market breakdowns.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {videos.map((video, index) => (
            <div key={video.id} ref={(el) => { cardRefs.current[index] = el }} data-index={index} style={{ transitionDelay: visible[index] ? `${index * 120}ms` : '0ms' }} className={`transition-all duration-700 ease-out ${visible[index] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button type="button" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/5">View All Videos {'->'}</button>
        </div>
      </div>
    </section>
  )
}

export default LatestVideos
