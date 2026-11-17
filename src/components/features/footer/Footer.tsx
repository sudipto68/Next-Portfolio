import Link from 'next/link'
import type { Profile } from '@/types/portfolio'
import { NAV_LINKS } from '@/constants/site'
import ExternalLink from '@/components/ui/ExternalLink'
import GiantName from './GiantName'
import { LocalClock, CurrentYear } from './LiveTime'
import BackToTop from './BackToTop'
import styles from './Footer.module.css'

export default function Footer({ profile }: { profile: Profile }) {
  const { copy, links } = profile
  const elsewhere = [
    { href: links.linkedin, label: 'LinkedIn' },
    { href: links.github, label: 'GitHub' },
    { href: links.medium, label: 'Medium' },
    { href: links.forum, label: 'Backdrop forum' },
  ]
  const city = profile.location.split(',')[0]

  return (
    <footer className={styles.foot}>
      <div className={styles.panel}>
        <div className={styles.panelTop}>
          <h2>{copy.footerHeading}</h2>
          <div>
            <h3>On this page</h3>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Elsewhere</h3>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              {elsewhere.map((l) => (
                <li key={l.href}>
                  <ExternalLink href={l.href}>{l.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{city} time</h3>
            <ul>
              <li>
                <b>
                  <LocalClock timeZone={profile.timezone} />
                </b>
              </li>
              <li>{profile.utcLabel}</li>
            </ul>
          </div>
        </div>
        <GiantName text={profile.name} />
        <div className={styles.legal}>
          <span>
            © <CurrentYear fallback={new Date().getFullYear()} /> {profile.name}. {copy.footerNote}
          </span>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
