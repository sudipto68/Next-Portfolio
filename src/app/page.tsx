import { getPortfolio } from '@/services/portfolioService'
import Hero from '@/components/features/hero/Hero'
import TechMarquee from '@/components/features/marquee/TechMarquee'
import StackSection from '@/components/features/stack/StackSection'
import ProjectsSection from '@/components/features/projects/ProjectsSection'
import ClientWorkSection from '@/components/features/client-work/ClientWorkSection'
import ExperienceSection from '@/components/features/experience/ExperienceSection'
import EducationSection from '@/components/features/experience/EducationSection'
import OpenSourceSection from '@/components/features/opensource/OpenSourceSection'
import ContactSection from '@/components/features/footer/ContactSection'

export default async function HomePage() {
  const { profile, projects, clientWork, experience, education, openSource } = await getPortfolio()

  return (
    <main id="top">
      <Hero profile={profile} />
      <TechMarquee label={profile.copy.stripLabel} tech={profile.tech} />
      <StackSection profile={profile} />
      <ProjectsSection profile={profile} projects={projects} />
      <ClientWorkSection profile={profile} items={clientWork.filter((c) => c.featured)} />
      <ExperienceSection profile={profile} experience={experience} />
      <EducationSection profile={profile} education={education} />
      <div className="dark">
        <OpenSourceSection profile={profile} items={openSource} />
        <ContactSection profile={profile} />
      </div>
    </main>
  )
}
