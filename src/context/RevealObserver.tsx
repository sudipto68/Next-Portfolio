'use client'

import { useEffect } from 'react'

const SELECTOR = '[data-rise]:not(.in), [data-split]:not(.in), [data-reveal]:not(.in)'

/** One observer for every reveal on the page: adds `in` once an element is 18% visible. */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }),
      { threshold: 0.18 },
    )
    const observeAll = () => document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))
    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
