import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-bg">
      <a href="#main" className="sr-only left-4 top-4 z-[60] rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg">
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
