import type { OpenSourceItem, Profile } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import ExternalLink from '@/components/ui/ExternalLink'
import styles from './OpenSource.module.css'

interface OpenSourceSectionProps {
  profile: Profile
  items: OpenSourceItem[]
}

export default function OpenSourceSection({ profile, items }: OpenSourceSectionProps) {
  const { copy } = profile
  return (
    <section className="section" id="open-source" style={{ paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className={`wrap ${styles.oss}`}>
        <div className={styles.intro}>
          <SplitHeading text={copy.ossHeading} />
          <p className="lead" data-rise="">
            {copy.ossIntro}
          </p>
          <span className={`hand ${styles.since}`} aria-hidden="true">
            {copy.ossSince}
          </span>
        </div>
        <div className={styles.list}>
          {items.map((o) => (
            <ExternalLink key={o.href} className={styles.row} href={o.href}>
              <div className={styles.top}>
                <h3>{o.name}</h3>
                <span className={styles.role}>{o.role}</span>
              </div>
              <p>{o.text}</p>
              <span className={styles.meta}>{o.meta}</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  )
}
