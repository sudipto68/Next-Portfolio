import type { Profile } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import ArrowIcon from '@/components/ui/ArrowIcon'
import ExternalLink from '@/components/ui/ExternalLink'
import styles from './Footer.module.css'

export default function ContactSection({ profile }: { profile: Profile }) {
  const { copy, links, email } = profile
  return (
    <section className={styles.cta} id="contact">
      <div className="wrap">
        <SplitHeading text={copy.contactHeading} className={styles.heading} />
        <p className={`lead ${styles.intro}`} data-rise="">
          {copy.contactIntro}
        </p>
        <div className={styles.row} data-rise="">
          <a className="btn btn-lime" href={`mailto:${email}`}>
            {email} <ArrowIcon />
          </a>
          <ExternalLink className="btn btn-line" href={links.linkedin}>
            LinkedIn profile
          </ExternalLink>
          <ExternalLink className="btn btn-line" href={links.github}>
            GitHub
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
