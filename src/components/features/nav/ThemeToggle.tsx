'use client'

import { useSyncExternalStore } from 'react'
import { THEME_STORAGE_KEY } from '@/constants/site'
import styles from './Nav.module.css'

const DARK_QUERY = '(prefers-color-scheme: dark)'
const THEME_EVENT = 'themechange'

function isDark() {
  const theme = document.documentElement.dataset.theme
  return theme ? theme === 'dark' : window.matchMedia(DARK_QUERY).matches
}

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(DARK_QUERY)
  mq.addEventListener('change', onChange)
  window.addEventListener(THEME_EVENT, onChange)
  return () => {
    mq.removeEventListener('change', onChange)
    window.removeEventListener(THEME_EVENT, onChange)
  }
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => null)

  function toggle() {
    const next = isDark() ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch (error) {
      console.error('[ThemeToggle]', error)
    }
    window.dispatchEvent(new Event(THEME_EVENT))
  }

  const label = dark === null ? 'Switch theme' : `Theme: ${dark ? 'dark' : 'light'}. Switch theme`

  return (
    <button className={styles.iconBtn} type="button" aria-label={label} onClick={toggle}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor" stroke="none" />
      </svg>
    </button>
  )
}
