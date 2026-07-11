import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import LatestVideos from '../components/LatestVideos'
import TradingSnapshot from '../components/TradingSnapshot'
import FeaturedJournal from '../components/FeaturedJournal'

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />
      <Hero />
      <Journey />
      <LatestVideos />
      <TradingSnapshot />
      <FeaturedJournal />
    </div>
  )
}

export default HomePage
