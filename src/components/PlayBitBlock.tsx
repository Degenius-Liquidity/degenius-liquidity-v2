import { affiliateMicrocopy, site } from '../data/site'

function PlayBitBlock() {
  return (
    <div id="playbit" className="w-full max-w-sm scroll-mt-28 rounded-2xl border border-border bg-surface p-7">
      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Education</p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary">PlayBit</h2>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        PlayBit is a trading education Discord server covering futures, day trading, options, stocks and crypto, with trading bots as a separate product. Membership is handled through Whop.
      </p>
      <a
        href={site.playbitClassroom.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        See PlayBit
      </a>
      <p className="mt-3 text-xs leading-relaxed text-text-secondary">{affiliateMicrocopy}</p>
    </div>
  )
}

export default PlayBitBlock
