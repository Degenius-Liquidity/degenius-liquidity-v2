import { useState } from 'react'
import { Link } from 'react-router-dom'

const links: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/#journey' },
  { label: 'Journal', to: '/journal' },
  { label: 'Toolkit', to: '/toolkit' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-2xl border border-border bg-white/5 px-6 py-4 backdrop-blur-xl">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-text-primary">
          Degenius Liquidity
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
        >
          <div className="flex flex-col gap-[3px]">
            <span className="h-[1.5px] w-4 bg-text-primary"></span>
            <span className="h-[1.5px] w-4 bg-text-primary"></span>
            <span className="h-[1.5px] w-4 bg-text-primary"></span>
          </div>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 w-full max-w-[1200px] rounded-2xl border border-border bg-white/5 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={() => setOpen(false)} className="block text-sm text-text-secondary transition-colors hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
