import type { ClientWork } from '@/types/portfolio'
import ClientWorkCard from './ClientWorkCard'
import styles from './ClientWork.module.css'

interface ClientWorkGridProps {
  items: ClientWork[]
  /** Swipeable row on phones instead of a long single column. */
  rail?: boolean
}

export default function ClientWorkGrid({ items, rail = false }: ClientWorkGridProps) {
  return (
    <div className={rail ? `${styles.grid} ${styles.rail}` : styles.grid}>
      {items.map((item, i) => (
        <ClientWorkCard key={item.slug} item={item} index={i} />
      ))}
    </div>
  )
}
