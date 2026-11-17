import { Fragment, type ReactNode } from 'react'

export function renderEmphasis(text: string): ReactNode[] {
  return text.split('**').map((part, i) => (i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>))
}
