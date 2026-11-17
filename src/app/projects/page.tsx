import type { Metadata } from 'next'
import { getClientWork, getProfile } from '@/services/portfolioService'
import SplitHeading from '@/components/ui/SplitHeading'
import ClientWorkFilter from '@/components/features/client-work/ClientWorkFilter'
import ContactSection from '@/components/features/footer/ContactSection'
import styles from '@/components/features/client-work/ClientWork.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const { copy } = await getProfile()
  return { title: copy.clientHeading, description: copy.clientPageIntro, alternates: { canonical: '/projects' } }
}

export default async function ProjectsPage() {
  const [profile, clientWork] = await Promise.all([getProfile(), getClientWork()])

  return (
    <main id="top">
      <section className={`section ${styles.page}`}>
        <div className="wrap">
          <SplitHeading text={profile.copy.clientHeading} />
          <p className="lead" data-rise="">
            {profile.copy.clientPageIntro}
          </p>
          <ClientWorkFilter items={clientWork} />
        </div>
      </section>
      <div className="dark">
        <ContactSection profile={profile} />
      </div>
    </main>
  )
}
