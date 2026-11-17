'use client'

import { useMemo } from 'react'
import { useNow } from '@/hooks/useNow'

export function LocalClock({ timeZone }: { timeZone: string }) {
  const now = useNow()
  const fmt = useMemo(() => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }), [timeZone])
  return <>{now === null ? '--:--' : fmt.format(now)}</>
}

/** `fallback` is the build year, shown until the client knows the real one. */
export function CurrentYear({ fallback }: { fallback: number }) {
  const now = useNow()
  return <>{now === null ? fallback : new Date(now).getFullYear()}</>
}
