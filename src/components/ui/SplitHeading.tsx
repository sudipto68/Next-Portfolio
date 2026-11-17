import { Fragment } from 'react'
import { cssVars } from '@/utils/cssVars'

interface SplitHeadingProps {
  text: string
  className?: string
}

/** Word-by-word mask reveal; the shared RevealObserver adds `in`. */
export default function SplitHeading({ text, className = 'title' }: SplitHeadingProps) {
  const words = text.trim().split(' ')
  return (
    <h2 className={className} aria-label={text} data-split="">
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="mask" aria-hidden="true">
            <span className="w" style={cssVars({ '--d': `${i * 70}ms` })}>
              {word}
            </span>
          </span>
        </Fragment>
      ))}
    </h2>
  )
}
