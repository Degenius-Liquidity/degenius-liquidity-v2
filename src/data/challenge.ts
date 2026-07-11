export type ChallengeData = {
  title: string
  subtitle: string
  goal: string
  currentPnl: string
  target: string
  tradingModels: string
  currentFocus: string[]
  status: string
  progressPercent: number
  closingNote: string
}

export const challenge: ChallengeData = {
  title: 'Current Challenge',
  subtitle: 'Working towards passing my current futures evaluation through disciplined execution and consistent risk management.',
  goal: '$0 -> $3,000',
  currentPnl: '$0',
  target: '$3,000',
  tradingModels: 'ILM & ORB',
  currentFocus: ['Patience', 'Risk Management', 'High Probability Setups'],
  status: 'Live',
  progressPercent: 0,
  closingNote: "I'm documenting this challenge as it happens. Every winning day, losing day and lesson learned helps shape my process. The objective isn't perfection - it's consistent execution.",
}
