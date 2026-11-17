'use client'

import { useEffect, useEffectEvent } from 'react'

/** Runs the handler on mount, on every scroll and on resize. */
export function useWindowScroll(handler: () => void) {
  const onScroll = useEffectEvent(handler)

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
