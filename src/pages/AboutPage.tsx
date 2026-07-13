import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function AboutPage() {
  useDocumentMeta({
    title: 'About - Degenius Liquidity',
    description: 'Degenius Liquidity documents the journey towards becoming a consistently profitable futures trader.',
  })

  return (
    <div className="min-h-screen w-full bg-bg">
      <Navbar />

      <section className="w-full px-4 py-20 md:py-28">
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">About</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">The Journey So Far</h1>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">Degenius Liquidity documents the journey towards becoming a consistently profitable futures trader.</p>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">The focus is on funded accounts, trading psychology, real lessons, content creation and the process of building a sustainable trading business.</p>
            <p className="text-base font-medium leading-relaxed text-text-primary md:text-lg">The aim is not to present a finished success story. It is to share useful progress honestly as the journey develops.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
