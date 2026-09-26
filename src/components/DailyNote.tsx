import { getQuoteOfTheDay } from '../data/quotes'

function DailyNote() {
  const quote = getQuoteOfTheDay()

  return (
    <section aria-labelledby="daily-note-heading" className="w-full px-4 py-12 md:py-16">
      <figure className="mx-auto w-full max-w-2xl rounded-2xl border border-border bg-surface px-7 py-8 md:px-10 md:py-10">
        <p id="daily-note-heading" className="text-xs font-medium uppercase tracking-wide text-text-secondary">Daily note</p>
        <blockquote className="mt-4">
          <p className="font-display text-xl font-medium leading-relaxed tracking-tight text-text-primary md:text-2xl">
            &ldquo;{quote.text}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-5 text-sm text-text-secondary">
          &mdash; <span className="text-text-primary">{quote.author}</span>
          {quote.source ? <span>, <cite className="not-italic">{quote.source}</cite></span> : null}
        </figcaption>
      </figure>
    </section>
  )
}

export default DailyNote
