import { Link } from 'react-router-dom'

const footerLinks: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Journal', to: '/journal' },
  { label: 'Toolkit', to: '/toolkit' },
  { label: 'About', to: '/about' },
]

const socialLinks: { label: string; url: string }[] = [
  { label: 'TikTok', url: '#' },
  { label: 'YouTube', url: '#' },
  { label: 'X', url: '#' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full border-t border-border px-4 py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-text-primary">Degenius Liquidity</p>
            <p className="mt-2 text-sm text-text-secondary">Building a trading business in public.</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.to} className="text-sm text-text-secondary transition-colors hover:text-text-primary">{link.label}</Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">Follow</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-text-primary">{social.label}</a>
              ))}
            </div>
            <a href="mailto:hello@example.com" className="mt-1 text-sm text-text-secondary transition-colors hover:text-text-primary">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-text-secondary">Futures trading involves substantial risk and is not suitable for everyone. Past performance does not guarantee future results. Nothing on this website is financial advice.</p>
          <p className="text-xs leading-relaxed text-text-secondary">Some links on this website are affiliate links. I may receive a commission if you use them, at no additional cost to you. Recommendations are based on my own experience or genuine interest.</p>
          <p className="mt-2 text-xs text-text-secondary">© {year} Degenius Liquidity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
