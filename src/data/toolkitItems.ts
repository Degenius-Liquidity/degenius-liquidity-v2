import { site } from './site'

export type ToolkitCategory =
  | 'Prop Firms'
  | 'Trading Software'
  | 'Education & Community'
  | 'AI & Productivity'
  | 'Hardware & Desk Setup'

export type ToolkitItem = {
  id: string
  name: string
  category: ToolkitCategory
  useCase: string
  whyUseful: string
  whoItSuits: string
  honestNote: string
  url: string
  isAffiliate: boolean
  affiliateCode?: string
  ctaLabel?: string
}

export const toolkitItems: ToolkitItem[] = [
  {
    id: 'lucid',
    name: 'Lucid',
    category: 'Prop Firms',
    useCase: 'Prop firm. Funded futures. Code DEGENIUS.',
    whyUseful: 'Straightforward evaluation structure for futures traders who already have a defined process.',
    whoItSuits: 'Traders who can read the rulebook first and treat the evaluation as a process test, not a lottery ticket.',
    honestNote: 'Rules, payouts and fees change. Read the current terms on Lucid before you pay. The referral code is DEGENIUS if checkout asks for one. This site does not claim the code auto-applies or that it unlocks a specific percent off.',
    url: site.lucid.url,
    isAffiliate: true,
    affiliateCode: site.lucid.code,
  },
  {
    id: 'bulenox',
    name: 'Bulenox',
    category: 'Prop Firms',
    useCase: 'Another futures evaluation option I keep in the mix for funded-account work.',
    whyUseful: 'Useful as a comparison point when I am weighing evaluation rules, cost and payout conditions.',
    whoItSuits: 'Day traders who already have a plan and want a second firm rather than a first lesson in futures.',
    honestNote: 'No prop firm is a shortcut. Compare drawdown rules and payout terms yourself. Code DEGENIUS if the site asks for a referral code.',
    url: site.bulenox.url,
    isAffiliate: true,
    affiliateCode: site.bulenox.code,
  },
  {
    id: 'topstep',
    name: 'Topstep',
    category: 'Prop Firms',
    useCase: 'One of the longer-standing funded futures firms I have used as a reference point.',
    whyUseful: 'The Combine-style evaluation is widely documented, which makes it easier to compare against other firms.',
    whoItSuits: 'Traders who want a well-known rule set and are willing to pay for a structured evaluation.',
    honestNote: 'Not an affiliate link. Popular does not mean easy. Read the current Combine rules before you start.',
    url: 'https://www.topstep.com/',
    isAffiliate: false,
  },
  {
    id: 'tradeify',
    name: 'Tradeify',
    category: 'Prop Firms',
    useCase: 'An evaluation firm I have looked at for funded futures accounts.',
    whyUseful: 'Another data point when comparing cost, consistency rules and payout speed.',
    whoItSuits: 'Traders already comparing several firms rather than committing on a social-media recommendation.',
    honestNote: 'Not an affiliate link. Terms move. Confirm the live rulebook on their site.',
    url: 'https://tradeify.co/',
    isAffiliate: false,
  },
  {
    id: 'apex',
    name: 'Apex Trader Funding',
    category: 'Prop Firms',
    useCase: 'A widely used futures evaluation firm I have used as a comparison.',
    whyUseful: 'Frequent promotions and a large trader base make it a common benchmark, for better and worse.',
    whoItSuits: 'Traders who will read trailing-drawdown rules carefully and not treat a sale price as a signal.',
    honestNote: 'Not an affiliate link. Evaluation rules can change quickly. Check the current terms directly.',
    url: 'https://apextraderfunding.com/',
    isAffiliate: false,
  },
  {
    id: 'alpha',
    name: 'Alpha Futures',
    category: 'Prop Firms',
    useCase: 'A UK-based futures evaluation firm I keep on the shortlist.',
    whyUseful: 'Useful to compare a UK firm against US-centric evaluation models.',
    whoItSuits: 'UK traders who want to read a local firm\'s terms alongside the usual US names.',
    honestNote: 'Not an affiliate link. Confirm current plans, platforms and payout terms on their site.',
    url: 'https://alpha-futures.com/',
    isAffiliate: false,
  },
  {
    id: 'playbit-classroom',
    name: 'PlayBit classroom',
    category: 'Education & Community',
    useCase: 'The education resource I point people to when they ask how I am learning models and process.',
    whyUseful: 'A structured classroom is more useful than scattered clips if you actually do the work.',
    whoItSuits: 'Traders who want a curriculum and are willing to practice, not people looking for a signal service.',
    honestNote: 'Education is not a payout. Results depend on whether you apply the material with discipline. This is an affiliate link.',
    url: site.playbitClassroom.url,
    isAffiliate: true,
    ctaLabel: 'Open the classroom',
  },
  {
    id: 'playbit-bots',
    name: 'PlayBit trading bots',
    category: 'Education & Community',
    useCase: 'A separate PlayBit product for people who want to study automated tools. I list it so it is not confused with the classroom.',
    whyUseful: 'Automation can help you observe a process. It does not replace judgement or risk limits.',
    whoItSuits: 'Traders who already understand that a bot is a tool, not an income plan.',
    honestNote: 'This is not a claim that bots produce prop-firm payouts, pass evaluations, or withdraw funded-account profits. Bots are a separate product from the PlayBit classroom. This is an affiliate link.',
    url: site.playbitBots.url,
    isAffiliate: true,
    ctaLabel: 'View PlayBit bots',
  },
  {
    id: 'tradingthings',
    name: 'TradingThings.io',
    category: 'Education & Community',
    useCase: 'A journal and review workspace I use around trade data and models.',
    whyUseful: 'Helps keep reviews tied to actual trades instead of memory.',
    whoItSuits: 'Traders who want a lighter journaling layer before they build their own system.',
    honestNote: 'Not an affiliate link. Treat any model notes as a starting point, not a guarantee.',
    url: 'https://tradingthings.io/',
    isAffiliate: false,
  },
  {
    id: 'tradingview',
    name: 'TradingView',
    category: 'Trading Software',
    useCase: 'Main charting platform for NQ, and occasional ES or GC, across London and New York sessions.',
    whyUseful: 'Clean charts, replay, and enough indicators without turning the screen into a video game.',
    whoItSuits: 'Day traders who want a serious chart first and extras second.',
    honestNote: 'Not an affiliate link. The free plan covers a lot. Paid plans are optional, not a personality.',
    url: 'https://www.tradingview.com/',
    isAffiliate: false,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI & Productivity',
    useCase: 'Used for planning content, structuring journal notes and general research.',
    whyUseful: 'A useful drafting partner when I already know what I think.',
    whoItSuits: 'People who will edit the output instead of publishing the first draft.',
    honestNote: 'Not an affiliate link. It does not trade for me and it does not replace a journal.',
    url: 'https://chatgpt.com/',
    isAffiliate: false,
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI & Productivity',
    useCase: 'Used for building and maintaining this website, and for longer structured writing.',
    whyUseful: 'Helpful for careful edits when the work is already scoped.',
    whoItSuits: 'Builders who stay responsible for what ships.',
    honestNote: 'Not an affiliate link. Treated as a tool, not as the author of the trading decisions.',
    url: 'https://claude.ai/',
    isAffiliate: false,
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'AI & Productivity',
    useCase: 'Editor for short-form trading clips on TikTok.',
    whyUseful: 'Fast enough for daily notes without a production studio.',
    whoItSuits: 'Creators who need a simple cut, caption and export loop.',
    honestNote: 'Not an affiliate link. Fine for short clips. Not a substitute for a real edit if the work gets heavier.',
    url: 'https://www.capcut.com/',
    isAffiliate: false,
  },
  {
    id: 'obs',
    name: 'OBS Studio',
    category: 'AI & Productivity',
    useCase: 'Records screen sessions when I want a clean capture of charts and notes.',
    whyUseful: 'Free, reliable, and boring in the best way.',
    whoItSuits: 'Anyone who needs a local recording tool without a subscription.',
    honestNote: 'Not an affiliate link. Takes a little setup. Worth it once it is set.',
    url: 'https://obsproject.com/',
    isAffiliate: false,
  },
]

export const toolkitCategories: ToolkitCategory[] = [
  'Prop Firms',
  'Trading Software',
  'Education & Community',
  'AI & Productivity',
  'Hardware & Desk Setup',
]

export const toolkitPreviewIds = ['playbit-classroom', 'lucid', 'bulenox'] as const
