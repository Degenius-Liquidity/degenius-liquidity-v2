import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ToolkitCard from '../components/ToolkitCard'
import { toolkitCategories, toolkitItems } from '../data/toolkitItems'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function ToolkitPage() {
  useDocumentMeta({
    title: 'Toolkit - Degenius Liquidity',
    description: 'The prop firms, software, education resources and tools used to build a trading business in public.',
  })

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <section className="w-full px-4 pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Toolkit</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">What I Actually Use</h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">An honest resource list, not a sales page. These are the prop firms, software and tools that show up in the day-to-day of building this trading business.</p>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            {toolkitCategories.map((category) => (
              <div key={category}>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">{category}</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                  {toolkitItems.filter((item) => item.category === category).map((item) => (
                    <ToolkitCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ToolkitPage
