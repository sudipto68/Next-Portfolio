'use client'

import { useRef } from 'react'
import type { Experience } from '@/types/portfolio'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { clamp } from '@/utils/clamp'
import Chips from '@/components/ui/Chips'
import styles from './Experience.module.css'

interface TimelineItem extends Experience {
  when: string
}

/** The line fills as you scroll; each node lights up once it passes 66% of the viewport. */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useWindowScroll(() => {
    const tl = ref.current
    if (!tl) return
    const vh = window.innerHeight
    const r = tl.getBoundingClientRect()
    tl.style.setProperty('--fill', (reduce ? 1 : clamp((vh * 0.62 - r.top) / r.height, 0, 1)).toFixed(3))
    tl.querySelectorAll<HTMLElement>('[data-tl-item]').forEach((item) => {
      const node = item.firstElementChild
      const lit = reduce || (node ? node.getBoundingClientRect().top < vh * 0.66 : false)
      item.classList.toggle(styles.on, lit)
    })
  })

  return (
    <div className={styles.tl} ref={ref}>
      <span className={styles.line} aria-hidden="true">
        <i />
      </span>
      {items.map((x, i) => (
        <article key={`${x.role}-${x.start}`} className={`${styles.item} ${i % 2 ? styles.right : styles.left}`} data-tl-item="">
          <span className={styles.node} aria-hidden="true" />
          <div className={styles.card} data-rise="">
            <span className={styles.when}>{x.when}</span>
            <h3>{x.role}</h3>
            <p className={styles.org}>{x.org}</p>
            <ul className={styles.pts}>
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Chips items={x.stack} />
          </div>
        </article>
      ))}
    </div>
  )
}
