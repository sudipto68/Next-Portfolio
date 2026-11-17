'use client'

import { useEffect, useRef } from 'react'
import { cssVars } from '@/utils/cssVars'
import styles from './Footer.module.css'

const PROBE_SIZE = 100
const FIT_PASSES = 3

/** Scales the name to the panel's inner width; letters rise in when it scrolls into view. */
export default function GiantName({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const panel = el?.parentElement
    if (!el || !panel) return
    // The optical-size axis makes glyphs wider at small sizes, so one linear pass overshoots; refine a few times.
    const fit = () => {
      const inner = panel.clientWidth - parseFloat(getComputedStyle(panel).paddingLeft) * 2
      let size = PROBE_SIZE
      for (let pass = 0; pass < FIT_PASSES; pass++) {
        el.style.fontSize = `${size}px`
        size *= inner / el.scrollWidth
      }
      el.style.fontSize = `${size}px`
    }
    fit()
    document.fonts?.ready.then(fit).catch((error: unknown) => console.error('[GiantName]', error))
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className={styles.giant} ref={ref} aria-hidden="true" data-reveal="">
      {[...text].map((ch, i) => (
        <span key={i} className={styles.g} style={cssVars({ '--i': i })}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </div>
  )
}
