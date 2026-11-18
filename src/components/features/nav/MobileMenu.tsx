'use client'

import { useEffect, useId, useState, type MouseEvent } from 'react'
import Link from 'next/link'
import type { NavLink } from '@/constants/site'
import NavLinks from './NavLinks'
import styles from './Nav.module.css'

interface MobileMenuProps {
  links: NavLink[]
  cta: string
}

export default function MobileMenu({ links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function closeOnLink(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest('a')) setOpen(false)
  }

  return (
    <>
      <button
        className={`${styles.iconBtn} ${styles.menuBtn}`}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d={open ? 'M6 6l12 12' : 'M4 8h16'} />
          <path d={open ? 'M18 6 6 18' : 'M4 16h16'} />
        </svg>
      </button>
      <div className={styles.panel} id={panelId} data-open={open} onClick={closeOnLink}>
        <NavLinks links={links} className={styles.panelLinks} />
        <Link className="btn btn-lime" href="/#contact">
          {cta}
        </Link>
      </div>
    </>
  )
}
