import type { VideoItem } from '../data/videos'

type VideoCardProps = {
  video: VideoItem
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
      <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-bg">
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-secondary">
            <path d="M6 4L16 10L6 16V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <span className="absolute left-3 top-3 rounded-full border border-border bg-bg/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-text-secondary">{video.platform}</span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-text-primary">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{video.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-text-secondary">
          <span>{video.publishedDate}</span>
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
