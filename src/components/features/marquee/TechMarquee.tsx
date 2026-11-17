import type { TechItem } from '@/types/portfolio'
import { cssVars } from '@/utils/cssVars'
import styles from './TechMarquee.module.css'

interface TechMarqueeProps {
  label: string
  tech: TechItem[]
}

export default function TechMarquee({ label, tech }: TechMarqueeProps) {
  const half = (duplicate: boolean) => (
    <div className={styles.half} aria-hidden={duplicate || undefined}>
      {tech.map((t) => (
        <span key={t.name} className={styles.tech} style={cssVars({ '--c': t.color })}>
          <i />
          {t.name}
        </span>
      ))}
    </div>
  )

  return (
    <section className={styles.strip} aria-label="Tools I work with">
      <p className={styles.label}>{label}</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {half(false)}
          {half(true)}
        </div>
      </div>
    </section>
  )
}
