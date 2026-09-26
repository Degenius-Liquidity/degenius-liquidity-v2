export type StatItem = {
  id: string
  label: string
  value: string
}

export const stats: StatItem[] = [
  { id: '1', label: 'Trading since', value: '2021' },
  { id: '2', label: 'Primary market', value: 'NQ futures' },
  { id: '3', label: 'Occasional markets', value: 'ES and GC' },
  { id: '4', label: 'Sessions', value: 'London & New York' },
  { id: '5', label: 'Style', value: 'Liquidity scalping' },
  { id: '6', label: 'Models', value: 'ILM and ORB' },
  { id: '7', label: 'Maximum trades', value: '3 per day' },
  { id: '8', label: 'Current focus', value: 'Patient execution' },
]
