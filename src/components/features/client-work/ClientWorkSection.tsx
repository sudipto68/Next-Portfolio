import Link from 'next/link'
import type { ClientWork, Profile } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import ArrowIcon from '@/components/ui/ArrowIcon'
import ClientWorkGrid from './ClientWorkGrid'
import styles from './ClientWork.module.css'

interface ClientWorkSectionProps {
  profile: Profile
  items: ClientWork[]
}

export default function ClientWorkSection({ profile, items }: ClientWorkSectionProps) {
  const { copy } = profile
  return (
    <section className="section" id="client-work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SplitHeading text={copy.clientHeading} />
        <p className="lead" data-rise="">
          {copy.clientIntro}
        </p>
        <ClientWorkGrid items={items} />
        <div className={styles.more}>
          <Link className="btn btn-dark" href="/projects">
            {copy.clientButton} <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
