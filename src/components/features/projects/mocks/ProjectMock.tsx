import type { Project } from '@/types/portfolio'
import ImageMock from './ImageMock'
import LockMock from './LockMock'
import ChatMock from './ChatMock'
import SerialMock from './SerialMock'

/** A real screenshot wins over the illustrated mock. */
export default function ProjectMock({ project }: { project: Project }) {
  if (project.screenshot) return <ImageMock image={project.screenshot} />
  switch (project.mockType) {
    case 'lock':
      return <LockMock />
    case 'chat':
      return <ChatMock />
    case 'serial':
      return <SerialMock />
    default:
      return null
  }
}
