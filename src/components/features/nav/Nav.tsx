import Link from 'next/link'
import type { Profile } from '@/types/portfolio'
import { NAV_LINKS } from '@/constants/site'
import NavShell from './NavShell'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'
import styles from './Nav.module.css'

export default function Nav({ profile }: { profile: Profile }) {
  return (
    <NavShell>
      <nav className={styles.nav} aria-label="Primary">
        <Link className={styles.brand} href="/#top" aria-label={`${profile.name}, back to top`}>
          <span className={styles.logo} aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
          <span className={styles.brandText}>
            <b>{profile.shortName}</b>
            <small>{profile.title}</small>
          </span>
        </Link>
        <NavLinks links={NAV_LINKS} className={styles.links} />
        <div className={styles.right}>
          <Link className="btn btn-lime sm" href="/#contact">
            {profile.copy.navCta}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </NavShell>
  )
}
