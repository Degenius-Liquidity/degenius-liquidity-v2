import { Link } from 'react-router-dom'
import { affiliateDisclaimer, riskDisclaimer, site } from '../data/site'

const footerLinks: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Journal', to: '/journal' },
  { label: 'Toolkit', to: '/toolkit' },
  { label: 'About', to: '/about' },
]

const socialLinks: { label: string; url: string }[] = [
  { label: 'TikTok', url: site.tiktokUrl },
  { label: 'Linktree', url: site.linktreeUrl },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full border-t border-border px-4 py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold tracking-tight text-text-primary">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{site.tagline}</p>
            <p className="mt-3 text-sm text-text-secondary">{site.location} · {site.primaryMarket} · {site.sessions}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Site</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-text-secondary transition-colors hover:text-text-primary">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Follow</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">{social.label}</a>
              ))}
            </div>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-text-secondary">
              Enquiries via Linktree. This site does not publish a personal inbox.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-text-secondary">{riskDisclaimer}</p>
          <p className="text-xs leading-relaxed text-text-secondary">{affiliateDisclaimer}</p>
          <p className="mt-2 text-xs text-text-secondary">© {year} {site.name}. {site.location}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
