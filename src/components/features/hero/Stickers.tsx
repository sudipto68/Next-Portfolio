'use client'

import { useRef, type PointerEvent } from 'react'
import type { Sticker as StickerData } from '@/types/portfolio'
import styles from './Hero.module.css'

function Sticker({ label, tone, index }: StickerData & { index: number }) {
  const drag = useRef({ down: false, sx: 0, sy: 0, x: 0, y: 0 })

  function onPointerDown(e: PointerEvent<HTMLSpanElement>) {
    const d = drag.current
    d.down = true
    d.sx = e.clientX - d.x
    d.sy = e.clientY - d.y
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: PointerEvent<HTMLSpanElement>) {
    const d = drag.current
    if (!d.down) return
    d.x = e.clientX - d.sx
    d.y = e.clientY - d.sy
    e.currentTarget.style.setProperty('--x', `${d.x}px`)
    e.currentTarget.style.setProperty('--y', `${d.y}px`)
  }

  const release = () => {
    drag.current.down = false
  }

  return (
    <span
      className={`${styles.sticker} ${styles[`pos${index % 3}`]} ${styles[tone]}`}
      aria-hidden="true"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={release}
      onPointerCancel={release}
    >
      {label}
    </span>
  )
}

export default function Stickers({ stickers }: { stickers: StickerData[] }) {
  return stickers.map((s, i) => <Sticker key={s.label} {...s} index={i} />)
}
