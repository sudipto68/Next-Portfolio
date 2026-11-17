'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from '../Projects.module.css'

const FIRST = 12
const YOURS = 15
const MINUTES_EACH = 6

/** Advances the queue like MediSerial's live tracker. */
export default function SerialMock() {
  const reduce = useReducedMotion()
  const [serving, setServing] = useState(FIRST)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setServing((n) => (n >= YOURS ? FIRST : n + 1)), 2600)
    return () => window.clearInterval(id)
  }, [reduce])

  const n = reduce ? FIRST : serving
  const eta = n === YOURS ? 'your turn' : `about ${(YOURS - n) * MINUTES_EACH} min`

  return (
    <div className={`${styles.mock} ${styles.serial}`} aria-hidden="true">
      <span className={`live ${styles.serHead}`}>Live serial</span>
      <span className={styles.serNow}>
        <small>Now serving</small>
        <b className={styles.serN}>{n}</b>
      </span>
      <span className={styles.serYou}>
        Your serial: <b>{YOURS}</b>
        <i>{eta}</i>
      </span>
    </div>
  )
}
