import type { Profile, Project } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import ArrowIcon from '@/components/ui/ArrowIcon'
import ExternalLink from '@/components/ui/ExternalLink'
import StackedCards from './StackedCards'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

interface ProjectsSectionProps {
  profile: Profile
  projects: Project[]
}

export default function ProjectsSection({ profile, projects }: ProjectsSectionProps) {
  const { copy } = profile
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <SplitHeading text={copy.workHeading} />
            <p className="lead" data-rise="">
              {copy.workIntro}
            </p>
          </div>
          <ExternalLink className="btn btn-dark" href={profile.links.github}>
            {copy.workButton} <ArrowIcon />
          </ExternalLink>
        </div>
        <StackedCards className={styles.cards}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </StackedCards>
      </div>
    </section>
  )
}
