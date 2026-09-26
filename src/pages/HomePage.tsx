import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import LatestVideos from '../components/LatestVideos'
import TradingSnapshot from '../components/TradingSnapshot'
import DailyNote from '../components/DailyNote'
import FeaturedJournal from '../components/FeaturedJournal'
import ToolkitPreview from '../components/ToolkitPreview'
import TradingThingsCard from '../components/TradingThingsCard'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function HomePage() {
  useDocumentMeta({
    title: 'Degenius Liquidity | UK Futures Day Trading Journal',
    description: 'UK futures day trader documenting NQ sessions, prop-firm evaluations and an honest journal. London and New York. Not financial advice. Not a prediction-market site.',
    path: '/',
  })

  return (
    <Layout>
      <Hero />
      <DailyNote />
      <Journey />
      <LatestVideos />
      <TradingSnapshot />
      <TradingThingsCard />
      <FeaturedJournal />
      <ToolkitPreview />
    </Layout>
  )
}

export default HomePage
