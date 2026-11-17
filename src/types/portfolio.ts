export type StickerTone = 'lime' | 'white' | 'coral'
export type ShapeKind = 'leaf' | 'rings' | 'slabs'
export type MockType = 'lock' | 'chat' | 'serial' | 'none'
export type GradientName = 'blue' | 'peach' | 'mint' | 'violet' | 'lime'
export type ClientCategory = 'webapp' | 'drupal' | 'ui' | 'django'

export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface Sticker {
  label: string
  tone: StickerTone
}

export interface TechItem {
  name: string
  color: string
}

export interface Layer {
  title: string
  text: string
  shape: ShapeKind
  chips: string[]
}

export interface ProfileLinks {
  linkedin: string
  github: string
  medium: string
  forum: string
}

export interface ProfileCopy {
  navCta: string
  heroChip: string
  heroLede: string
  heroPrimary: string
  heroSecondary: string
  stickerHint: string
  stripLabel: string
  stackHeading: string
  stackHand: string
  stackIntro: string
  workHeading: string
  workIntro: string
  workButton: string
  clientHeading: string
  clientIntro: string
  clientButton: string
  clientPageIntro: string
  experienceHeading: string
  experienceIntro: string
  educationHeading: string
  ossHeading: string
  ossIntro: string
  ossSince: string
  contactHeading: string
  contactIntro: string
  footerHeading: string
  footerNote: string
}

export interface CodeCard {
  frontend: string[]
  backend: string[]
  cms: string[]
  maintains: string[]
}

export interface Seo {
  title: string
  description: string
}

export interface Profile {
  name: string
  shortName: string
  title: string
  company: string
  location: string
  timezone: string
  utcLabel: string
  email: string
  links: ProfileLinks
  rightNow: string
  stickers: Sticker[]
  code: CodeCard
  tech: TechItem[]
  layers: Layer[]
  copy: ProfileCopy
  seo: Seo
}

export interface Project {
  title: string
  type: string
  year?: string
  tags: string[]
  description: string
  mockType: MockType
  screenshot?: ImageAsset
  gradient: GradientName
  liveUrl?: string
  sourceUrl?: string
}

export interface Experience {
  role: string
  org: string
  start: string
  end: string | null
  points: string[]
  stack: string[]
}

export interface Education {
  degree: string
  org: string
  startYear: number
  endYear: number
}

export interface OpenSourceItem {
  name: string
  role: string
  meta: string
  text: string
  href: string
}

export interface ClientWork {
  slug: string
  name: string
  summary: string
  tags: string[]
  category: ClientCategory
  image: ImageAsset
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
}

export interface PortfolioData {
  profile: Profile
  projects: Project[]
  experience: Experience[]
  education: Education[]
  openSource: OpenSourceItem[]
  clientWork: ClientWork[]
}
