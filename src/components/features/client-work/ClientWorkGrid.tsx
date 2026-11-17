import type { ClientWork } from '@/types/portfolio'
import ClientWorkCard from './ClientWorkCard'
import styles from './ClientWork.module.css'

export default function ClientWorkGrid({ items }: { items: ClientWork[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item, i) => (
        <ClientWorkCard key={item.slug} item={item} index={i} />
      ))}
    </div>
  )
}
