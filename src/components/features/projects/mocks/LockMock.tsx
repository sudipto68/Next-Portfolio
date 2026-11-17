'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from '../Projects.module.css'

const START = 60
const HOLD_DONE = -4

/** Counts down like the real extension, ticks both boxes, then loops. */
export default function LockMock() {
  const reduce = useReducedMotion()
  const [seconds, setSeconds] = useState(START)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => setSeconds((s) => (s - 1 <= HOLD_DONE ? START : s - 1)), 1000)
    return () => window.clearInterval(id)
  }, [reduce])

  const shown = reduce ? START : seconds
  const label = shown === START ? '1:00' : `0:${String(Math.max(shown, 0)).padStart(2, '0')}`

  return (
    <div className={`${styles.mock} ${styles.lock}`} aria-hidden="true">
      <span className={styles.lockTime}>{label}</span>
      <span className={styles.lockMsg}>Step away from the screen.</span>
      <span className={`${styles.lockChecks} ${shown <= 0 ? styles.done : ''}`}>
        <span>Walked for a minute</span>
        <span>Drank some water</span>
      </span>
    </div>
  )
}
