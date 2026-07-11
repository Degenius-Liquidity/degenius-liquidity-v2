export type VideoItem = {
  id: string
  title: string
  description: string
  publishedDate: string
  duration: string
  platform: string
}

export const videos: VideoItem[] = [
  {
    id: '1',
    title: 'How I Passed My $100K Funded Challenge',
    description: 'The exact rules and setups I used to hit target without blowing the account.',
    publishedDate: '2 days ago',
    duration: '0:47',
    platform: 'TikTok',
  },
  {
    id: '2',
    title: 'Why I Took This $1,240 Loss',
    description: 'Breaking down the trade that went against the plan and what I changed after.',
    publishedDate: '5 days ago',
    duration: '1:02',
    platform: 'TikTok',
  },
  {
    id: '3',
    title: 'Reading Order Flow Before the Open',
    description: 'A quick look at how I prepare for the first 30 minutes of the NQ session.',
    publishedDate: '1 week ago',
    duration: '0:55',
    platform: 'TikTok',
  },
]
