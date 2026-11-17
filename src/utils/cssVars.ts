import type { CSSProperties } from 'react'

/** Typed inline CSS custom properties, e.g. cssVars({ '--d': '70ms' }). */
export const cssVars = (vars: Record<`--${string}`, string | number>) => vars as CSSProperties
