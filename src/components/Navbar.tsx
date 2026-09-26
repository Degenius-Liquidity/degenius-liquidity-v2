import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/#journey' },
  { label: 'Journal', to: '/journal' },
  { label: 'Toolkit', to: '/toolkit' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function linkClass(isActive: boolean) {
  return `text-sm transition-colors hover:text-text-primary ${isActive ? 'text-text-primary' : 'text-text-secondary'}`
}

function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-2xl border border-border bg-bg/80 px-5 py-3.5 backdrop-blur-xl md:px-6">
        <Link to="/" className="font-display text-base font-semibold tracking-tight text-text-primary md:text-lg" onClick={() => setOpen(false)}>
          Degenius Liquidity
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              {link.to.includes('#') ? (
                <Link to={link.to} className="text-sm text-text-secondary transition-colors hover:text-text-primary">{link.label}</Link>
              ) : (
                <NavLink to={link.to} className={({ isActive }) => linkClass(isActive)} end={link.to === '/'}>{link.label}</NavLink>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <div className="flex flex-col gap-[3px]">
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform ${open ? 'translate-y-[4.5px] rotate-45' : ''}`}></span>
            <span className={`h-[1.5px] w-4 bg-text-primary transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`h-[1.5px] w-4 bg-text-primary transition-transform ${open ? '-translate-y-[4.5px] -rotate-45' : ''}`}></span>
          </div>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 w-full max-w-[1200px] rounded-2xl border border-border bg-bg/95 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary">
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
