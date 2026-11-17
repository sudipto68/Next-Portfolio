'use client'

import { useSyncExternalStore } from 'react'

const TICK_MS = 20_000

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, TICK_MS)
  return () => window.clearInterval(id)
}

const minuteNow = () => Math.floor(Date.now() / 60_000) * 60_000

/** Current time rounded to the minute, or null during server render and hydration. */
export function useNow(): number | null {
  return useSyncExternalStore(subscribe, minuteNow, () => null)
}
