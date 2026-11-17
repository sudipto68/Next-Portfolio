import Link from 'next/link'
import SplitHeading from '@/components/ui/SplitHeading'
import ArrowIcon from '@/components/ui/ArrowIcon'
import styles from '@/components/features/client-work/ClientWork.module.css'

export default function NotFound() {
  return (
    <main id="top">
      <section className={`section center ${styles.page}`}>
        <div className="wrap">
          <SplitHeading text="This page doesn’t exist." />
          <p className="lead">The link may be old, or the address has a typo. The home page has everything on this site.</p>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-lime" href="/">
              Go to the home page <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
