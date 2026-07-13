export type ToolkitCategory = 'Prop Firms' | 'Education & Community' | 'Trading Software' | 'Creator & Productivity Tools'

export type ToolkitItem = {
  id: string
  name: string
  category: ToolkitCategory
  useCase: string
  whyUseful: string
  honestNote: string
  url: string
  isAffiliate: boolean
}

export const toolkitItems: ToolkitItem[] = [
  {
    id: 'lucid',
    name: 'Lucid',
    category: 'Prop Firms',
    useCase: 'One of the prop firms I use for funded futures evaluations.',
    whyUseful: 'Offers evaluation accounts for traders looking to trade funded capital.',
    honestNote: 'Rules and payouts vary by firm, so read the terms carefully before starting an evaluation.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'topstep',
    name: 'Topstep',
    category: 'Prop Firms',
    useCase: 'A prop firm I use for funded futures evaluations.',
    whyUseful: 'One of the longer-standing options in the funded futures space.',
    honestNote: 'Like any prop firm, it comes with its own rule set worth reading fully first.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'tradeify',
    name: 'Tradeify',
    category: 'Prop Firms',
    useCase: 'A prop firm I use for funded futures evaluations.',
    whyUseful: 'Another evaluation option with its own account structures and pricing.',
    honestNote: 'Compare terms against other firms before committing to an evaluation.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'apex',
    name: 'Apex',
    category: 'Prop Firms',
    useCase: 'A prop firm I use for funded futures evaluations.',
    whyUseful: 'A widely used option in the funded futures space.',
    honestNote: 'Evaluation rules can change, so always check the current terms directly.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'playbit',
    name: 'Playbit',
    category: 'Education & Community',
    useCase: 'A resource I use for learning trading models and setups.',
    whyUseful: 'Can help shortcut parts of the learning curve if you engage with it actively.',
    honestNote: 'Like any educational resource, results depend on how consistently you apply what you learn.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'tradingthings',
    name: 'TradingThings.io',
    category: 'Education & Community',
    useCase: 'Another resource I use around trading education and models.',
    whyUseful: 'Useful for exposure to different ways of thinking about setups.',
    honestNote: 'Treat any educational content as a starting point, not a guarantee.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'Education & Community',
    useCase: 'Where I share updates and talk trading with other traders.',
    whyUseful: 'Useful for accountability and seeing how other traders think through similar setups.',
    honestNote: 'Treat it as a discussion space, not financial advice.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'tradingview',
    name: 'TradingView',
    category: 'Trading Software',
    useCase: 'My main charting platform for market analysis and trade planning.',
    whyUseful: 'Clean charting tools and a wide range of indicators across most markets.',
    honestNote: 'The free plan covers most of what a lot of traders actually need to get started.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'Creator & Productivity Tools',
    useCase: 'The video editor I use for short-form trading content.',
    whyUseful: 'Straightforward for quick edits without a steep learning curve.',
    honestNote: 'Good enough for daily content, but not built for heavy production work.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Creator & Productivity Tools',
    useCase: 'Used for planning content, structuring journal entries and general research.',
    whyUseful: 'Useful as a thinking and drafting tool alongside my own judgement.',
    honestNote: 'Everything it produces still gets reviewed and edited before it is used.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'Creator & Productivity Tools',
    useCase: 'Used for building and maintaining parts of this website.',
    whyUseful: 'Helpful for working through code changes and structured writing.',
    honestNote: 'Treated as a tool, not a replacement for understanding what is being built.',
    url: '#',
    isAffiliate: false,
  },
  {
    id: 'obs',
    name: 'OBS',
    category: 'Creator & Productivity Tools',
    useCase: 'Used for recording and streaming trading sessions.',
    whyUseful: 'Free, reliable and flexible for capturing screen and webcam.',
    honestNote: 'Takes a little setup time but works well once configured.',
    url: '#',
    isAffiliate: false,
  },
]

export const toolkitCategories: ToolkitCategory[] = ['Prop Firms', 'Education & Community', 'Trading Software', 'Creator & Productivity Tools']
