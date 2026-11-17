'use client'

import { useRef, type ReactNode } from 'react'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import styles from './Nav.module.css'

const HIDE_AFTER = 160

/** Hides the nav while scrolling down past 160px and brings it back on scroll up. */
export default function NavShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const lastY = useRef(0)

  useWindowScroll(() => {
    const el = ref.current
    if (!el) return
    const y = window.scrollY
    if (y > HIDE_AFTER && y > lastY.current + 2) el.classList.add(styles.hide)
    if (y < lastY.current - 2 || y < HIDE_AFTER) el.classList.remove(styles.hide)
    lastY.current = y
  })

  return (
    <div className={styles.wrap} ref={ref}>
      {children}
    </div>
  )
}
