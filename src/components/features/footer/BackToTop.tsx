'use client'

import { useSmoothScroll } from '@/context/SmoothScrollProvider'

export default function BackToTop() {
  const { scrollTo } = useSmoothScroll()
  return (
    <button type="button" onClick={() => scrollTo(0)}>
      Back to top
    </button>
  )
}
