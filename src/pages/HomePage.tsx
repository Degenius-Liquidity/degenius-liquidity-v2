import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import LatestVideos from '../components/LatestVideos'
import TradingSnapshot from '../components/TradingSnapshot'
import FeaturedJournal from '../components/FeaturedJournal'
import Footer from '../components/Footer'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function HomePage() {
  useDocumentMeta({
    title: 'Degenius Liquidity - Building a Trading Business in Public',
    description: 'Documenting the journey towards becoming a consistently profitable futures trader, one funded account and lesson at a time.',
  })

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />
      <Hero />
      <Journey />
      <LatestVideos />
      <TradingSnapshot />
      <FeaturedJournal />
      <Footer />
    </div>
  )
}

export default HomePage
