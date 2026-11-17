'use client'

import { useState } from 'react'
import type { ClientCategory, ClientWork } from '@/types/portfolio'
import ClientWorkGrid from './ClientWorkGrid'
import styles from './ClientWork.module.css'

type Filter = 'all' | ClientCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'webapp', label: 'Web apps' },
  { value: 'drupal', label: 'Drupal & Backdrop' },
  { value: 'django', label: 'Django' },
  { value: 'ui', label: 'HTML & CSS' },
]

export default function ClientWorkFilter({ items }: { items: ClientWork[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const countFor = (value: Filter) => (value === 'all' ? items.length : items.filter((i) => i.category === value).length)
  const visible = filter === 'all' ? items : items.filter((i) => i.category === filter)

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter client work">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`chip ${styles.filter}`}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
            <span className={styles.count}>{countFor(value)}</span>
          </button>
        ))}
      </div>
      <ClientWorkGrid items={visible} />
    </>
  )
}
