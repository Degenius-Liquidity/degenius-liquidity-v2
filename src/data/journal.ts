export type JournalIcon = 'notebook' | 'chart' | 'target'

export type JournalItem = {
  id: string
  category: string
  readingTime: string
  title: string
  excerpt: string
  publishedDate: string
  icon: JournalIcon
}

export const journalEntries: JournalItem[] = [
  {
    id: '1',
    category: 'Reflection',
    readingTime: '4 min read',
    title: 'How I Ended Up Trading Futures Instead of Crypto',
    excerpt: 'The real reasons I moved away from crypto and into futures trading full time.',
    publishedDate: '3 days ago',
    icon: 'notebook',
  },
  {
    id: '2',
    category: 'Psychology',
    readingTime: '5 min read',
    title: 'What Finally Stopped Me Overtrading',
    excerpt: 'The mindset shift and simple rule that fixed my biggest trading leak.',
    publishedDate: '1 week ago',
    icon: 'chart',
  },
  {
    id: '3',
    category: 'Strategy',
    readingTime: '6 min read',
    title: 'The ILM & ORB Models I Keep Coming Back To',
    excerpt: 'A breakdown of the two setups that show up in almost every winning week.',
    publishedDate: '2 weeks ago',
    icon: 'target',
  },
]
