'use client'

import { useRef, type ReactNode } from 'react'
import { useWindowScroll } from '@/hooks/useWindowScroll'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { clamp } from '@/utils/clamp'

interface StackedCardsProps {
  className?: string
  children: ReactNode
}

/** As each sticky card is covered by the next, it scales down to 0.94 and dims. */
export default function StackedCards({ className, children }: StackedCardsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useWindowScroll(() => {
    if (reduce || !ref.current) return
    const cards = Array.from(ref.current.querySelectorAll<HTMLElement>('[data-card]'))
    cards.slice(0, -1).forEach((card, i) => {
      const top = parseFloat(getComputedStyle(card).top) || 0
      const dist = cards[i + 1].getBoundingClientRect().top - top
      const p = clamp(1 - dist / card.offsetHeight, 0, 1)
      card.style.transform = `scale(${(1 - p * 0.06).toFixed(4)})`
      card.style.setProperty('--dim', (p * 0.5).toFixed(3))
    })
  })

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}
