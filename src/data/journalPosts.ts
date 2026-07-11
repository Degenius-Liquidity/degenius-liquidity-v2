export type JournalTag = 'Psychology' | 'Risk Management' | 'Prop Firms' | 'Reviews' | 'Website Build' | 'Behind the Scenes'

export type JournalPost = {
  id: string
  date: string
  title: string
  summary: string
  markets: string[]
  model: string
  result: string
  lesson: string
  tags: JournalTag[]
  featured?: boolean
}

export const journalPosts: JournalPost[] = [
  {
    id: '1',
    date: '12 Jul 2026',
    title: 'How I Ended Up Trading Futures Instead of Crypto',
    summary: 'The real reasons I moved away from crypto and into futures trading full time.',
    markets: ['NQ'],
    model: 'ILM',
    result: 'Transitioned focus, no live trades this week',
    lesson: 'Specialising in one market removed most of my noise.',
    tags: ['Reviews', 'Prop Firms'],
    featured: true,
  },
  {
    id: '2',
    date: '05 Jul 2026',
    title: 'What Finally Stopped Me Overtrading',
    summary: 'The mindset shift and simple rule that fixed my biggest trading leak.',
    markets: ['NQ', 'ES'],
    model: 'ORB',
    result: 'Reduced trade count from six to three per day',
    lesson: 'Fewer trades, higher quality, calmer sessions.',
    tags: ['Psychology', 'Risk Management'],
  },
  {
    id: '3',
    date: '28 Jun 2026',
    title: 'The ILM & ORB Models I Keep Coming Back To',
    summary: 'A breakdown of the two setups that show up in almost every winning week.',
    markets: ['NQ'],
    model: 'ILM',
    result: 'Consistent week, no rule breaks',
    lesson: 'Simplicity outperforms complexity when it is repeatable.',
    tags: ['Reviews'],
  },
  {
    id: '4',
    date: '19 Jun 2026',
    title: 'Passing My First Funded Evaluation',
    summary: 'What actually mattered in the weeks leading up to passing.',
    markets: ['NQ', 'GC'],
    model: 'ORB',
    result: 'Evaluation passed on schedule',
    lesson: 'Protecting capital mattered more than hitting targets fast.',
    tags: ['Prop Firms', 'Reviews'],
  },
  {
    id: '5',
    date: '10 Jun 2026',
    title: 'A Losing Week I Am Actually Proud Of',
    summary: 'Why a losing week can still be a good week if the process holds.',
    markets: ['ES'],
    model: 'ILM',
    result: 'Net loss, zero rule violations',
    lesson: 'A losing week with good process beats a winning week with luck.',
    tags: ['Psychology', 'Risk Management'],
  },
  {
    id: '6',
    date: '02 Jun 2026',
    title: 'Building This Website in Public',
    summary: 'Why documenting the build matters as much as documenting the trades.',
    markets: [],
    model: 'N/A',
    result: 'Homepage and journal shipped',
    lesson: 'Accountability works better when everything is visible.',
    tags: ['Website Build', 'Behind the Scenes'],
  },
  {
    id: '7',
    date: '24 May 2026',
    title: 'Why I Stopped Watching Every Candle',
    summary: 'How reducing screen time actually improved my execution.',
    markets: ['NQ'],
    model: 'ORB',
    result: 'Fewer screen hours, same output',
    lesson: 'Presence at the open matters more than presence all day.',
    tags: ['Psychology'],
  },
  {
    id: '8',
    date: '15 May 2026',
    title: 'Reviewing Six Months of Trade Data',
    summary: 'What the numbers showed that my memory did not.',
    markets: ['NQ', 'ES', 'GC'],
    model: 'ILM',
    result: 'Win rate steady, drawdown reduced',
    lesson: 'The data told a calmer story than my memory did.',
    tags: ['Reviews', 'Risk Management'],
  },
]

export const allModels = ['ILM', 'ORB', 'N/A']
export const allMarkets = ['NQ', 'ES', 'GC']
export const allTags: JournalTag[] = ['Psychology', 'Risk Management', 'Prop Firms', 'Reviews', 'Website Build', 'Behind the Scenes']
