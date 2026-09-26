import Layout from '../components/Layout'
import ToolkitCard from '../components/ToolkitCard'
import { toolkitCategories, toolkitItems } from '../data/toolkitItems'
import { affiliateMicrocopy, site } from '../data/site'
import { useDocumentMeta } from '../utils/useDocumentMeta'

function ToolkitPage() {
  useDocumentMeta({
    title: 'Toolkit | Prop firms and tools for UK futures day traders',
    description: 'The prop firms, charting, education and tools Degenius Liquidity actually uses for UK futures day trading. Affiliate links are labelled.',
    path: '/toolkit',
  })

  return (
    <Layout>
      <section className="w-full px-4 pb-16 pt-16 sm:pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Toolkit</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">What I actually use</h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              A resource list, not a sales floor. Each card covers what it is for, why it is here, who it may suit, and the drawbacks. Affiliate links are marked.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-6 text-left">
            <p className="text-sm leading-relaxed text-text-secondary">
              Education: <span className="text-text-primary">PlayBit</span>, a trading education Discord server covering futures, day trading, options, stocks and crypto. Membership is handled through Whop. PlayBit trading bots are listed separately and are not a claim that bots produce prop-firm payouts.
            </p>
            <a
              href={site.playbitClassroom.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-accent/60 bg-bg px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10"
            >
              See PlayBit
            </a>
            <p className="mt-3 text-xs text-text-secondary">{affiliateMicrocopy}</p>
          </div>

          <div className="mt-16 flex flex-col gap-16">
            {toolkitCategories.map((category) => {
              const items = toolkitItems.filter((item) => item.category === category)

              return (
                <div key={category}>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">{category}</h2>
                  {items.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                      {items.map((item) => (
                        <ToolkitCard key={item.id} item={item} />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
                      Desk hardware is still being documented. I trade from a simple UK desk during London and New York sessions. Specific monitors and peripherals will be listed here when they are worth recommending — not invented to fill the page.
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ToolkitPage
