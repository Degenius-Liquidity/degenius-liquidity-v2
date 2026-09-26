import type { ReactNode } from 'react'
import { site } from '../data/site'

type Props = {
  children?: ReactNode
}

export function JournalComingSoonNotice() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-bg/90 px-8 py-8 text-center shadow-2xl backdrop-blur">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
        Journal coming soon
      </span>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        Real trade log launching soon.{' '}
        <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-text-primary underline underline-offset-4 hover:text-accent">
          Follow on TikTok
        </a>{' '}
        for updates.
      </p>
      <p className="mt-3 text-xs text-text-secondary">Cards shown behind this notice are layout placeholders, not real trades.</p>
    </div>
  )
}

function JournalComingSoon({ children }: Props) {
  return (
    <div className="relative">
      <div aria-hidden="true" inert className="pointer-events-none select-none opacity-30 blur-[6px]">
        {children}
      </div>
      <div className="absolute inset-0 flex items-start justify-center px-4 pt-10 md:items-center md:pt-0">
        <JournalComingSoonNotice />
      </div>
    </div>
  )
}

export default JournalComingSoon
