type JournalFiltersProps = {
  search: string
  onSearchChange: (value: string) => void
  market: string
  onMarketChange: (value: string) => void
  tag: string
  onTagChange: (value: string) => void
  markets: string[]
  tags: string[]
}

function JournalFilters({
  search,
  onSearchChange,
  market,
  onMarketChange,
  tag,
  onTagChange,
  markets,
  tags,
}: JournalFiltersProps) {
  const selectClass = 'rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none transition-colors hover:border-border-strong focus:border-border-strong'

  return (
    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center">
      <input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search the journal"
        className="w-full rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary hover:border-border-strong focus:border-border-strong md:max-w-xs"
      />

      <select value={market} onChange={(event) => onMarketChange(event.target.value)} className={selectClass}>
        <option value="All Markets">All Markets</option>
        {markets.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <select value={tag} onChange={(event) => onTagChange(event.target.value)} className={selectClass}>
        <option value="All Tags">All Tags</option>
        {tags.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default JournalFilters
