import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** On every route change: scroll to the hash target if there is one, otherwise land at the top. */
export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
}
