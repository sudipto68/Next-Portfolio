import type { Project } from '@/types/portfolio'
import { GRADIENTS } from '@/constants/gradients'
import { cssVars } from '@/utils/cssVars'
import ExternalLink from '@/components/ui/ExternalLink'
import ProjectMock from './mocks/ProjectMock'
import styles from './Projects.module.css'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = [
    { href: project.liveUrl, label: 'Live demo' },
    { href: project.sourceUrl, label: 'Source on GitHub' },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href))

  return (
    <article className={styles.card} data-card="" style={cssVars({ '--i': index, '--g': GRADIENTS[project.gradient] })}>
      <div>
        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <dl className={styles.meta}>
        <div>
          <dt>Type</dt>
          <dd>{project.type}</dd>
        </div>
        {project.year && (
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
        )}
        {links.length > 0 && (
          <div>
            {links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        )}
      </dl>
      <ProjectMock project={project} />
    </article>
  )
}
