'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SCROLL_OFFSET } from '@/constants/site'

type ScrollTarget = number | HTMLElement

interface SmoothScrollValue {
  scrollTo: (target: ScrollTarget) => void
}

const SmoothScrollContext = createContext<SmoothScrollValue>({
  scrollTo: (target) => (typeof target === 'number' ? window.scrollTo({ top: target }) : target.scrollIntoView()),
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

function isPlainLeftClick(e: MouseEvent) {
  return !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reduce) return
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, autoRaf: true })
    lenisRef.current = lenis
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduce])

  const scrollTo = useCallback(
    (target: ScrollTarget) => {
      const lenis = lenisRef.current
      if (lenis) lenis.scrollTo(target, { offset: SCROLL_OFFSET, duration: 1.3 })
      else if (typeof target === 'number') window.scrollTo({ top: target })
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    },
    [reduce],
  )

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!isPlainLeftClick(e) || !(e.target instanceof Element)) return
      const anchor = e.target.closest('a')
      if (!anchor || anchor.target === '_blank') return
      const url = new URL(anchor.href, window.location.href)
      const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname
      if (!samePage || url.hash.length < 2) return
      const id = decodeURIComponent(url.hash.slice(1))
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      scrollTo(id === 'top' ? 0 : el)
    }
    // Capture phase runs before next/link, which then skips its own hash jump.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [scrollTo])

  const value = useMemo(() => ({ scrollTo }), [scrollTo])
  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>
}
