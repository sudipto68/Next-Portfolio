import type { Metadata, ResolvingMetadata } from 'next'
import { getClientWork, getProfile } from '@/services/portfolioService'
import SplitHeading from '@/components/ui/SplitHeading'
import ClientWorkFilter from '@/components/features/client-work/ClientWorkFilter'
import ContactSection from '@/components/features/footer/ContactSection'
import styles from '@/components/features/client-work/ClientWork.module.css'

export async function generateMetadata(_: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const [{ copy, seo, name }, inherited] = await Promise.all([getProfile(), parent])
  const title = copy.clientHeading
  const description = seo.projectsDescription
  return {
    title,
    description,
    alternates: { canonical: '/projects' },
    openGraph: { ...inherited.openGraph, title: `${title} · ${name}`, description, url: '/projects' },
    twitter: { ...inherited.twitter, title: `${title} · ${name}`, description },
  }
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
