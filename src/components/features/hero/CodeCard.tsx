'use client'

import { useEffect, useMemo, useState } from 'react'
import type { CodeLine } from '@/utils/buildCodeLines'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import styles from './Hero.module.css'

const START_DELAY = 1300
const CHAR_DELAY = 13
const SPACE_DELAY = 5
const LINE_PAUSE = 60

interface CodeCardProps {
  fileName: string
  lines: CodeLine[]
}

function lineLength(line: CodeLine) {
  return line.reduce((sum, [, text]) => sum + text.length, 0)
}

/** Types the profile out once, character by character, like the reference's code card. */
export default function CodeCard({ fileName, lines }: CodeCardProps) {
  const reduce = useReducedMotion()
  const [typed, setTyped] = useState(0)

  const { starts, chars, lineEnds } = useMemo(() => {
    const starts: number[] = []
    const lineEnds = new Set<number>()
    let offset = 0
    for (const line of lines) {
      starts.push(offset)
      offset += lineLength(line)
      lineEnds.add(offset)
    }
    const chars = lines.flatMap((line) => line.flatMap(([, text]) => [...text]))
    return { starts, chars, lineEnds }
  }, [lines])

  useEffect(() => {
    if (reduce) return
    let timer = 0
    let n = 0
    const step = () => {
      n += 1
      setTyped(n)
      if (n >= chars.length) return
      const delay = (chars[n - 1] === ' ' ? SPACE_DELAY : CHAR_DELAY) + (lineEnds.has(n) ? LINE_PAUSE : 0)
      timer = window.setTimeout(step, delay)
    }
    timer = window.setTimeout(step, START_DELAY)
    return () => window.clearTimeout(timer)
  }, [reduce, chars, lineEnds])

  const shown = reduce ? chars.length : typed
  const visibleLines = lines.filter((_, i) => i === 0 || shown > starts[i])
  const caret = <span className={styles.caret} />

  return (
    <pre className={styles.code} aria-hidden="true">
      <span className={styles.codeFile}>{fileName}</span>
      {visibleLines.map((line, i) => {
        let left = shown - starts[i]
        return (
          <span key={i} className={styles.codeLine}>
            {line.map(([kind, text], j) => {
              const part = text.slice(0, Math.max(0, left))
              left -= text.length
              return part ? (
                <span key={j} className={styles[kind]}>
                  {part}
                </span>
              ) : null
            })}
            {i === visibleLines.length - 1 && caret}
          </span>
        )
      })}
    </pre>
  )
}
