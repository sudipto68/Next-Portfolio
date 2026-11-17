export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export const THEME_STORAGE_KEY = 'skm-theme-v3'
export const SCROLL_OFFSET = -90

export interface NavLink {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '/#stack', label: 'Stack' },
  { href: '/#work', label: 'Projects' },
  { href: '/projects', label: 'Client work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#open-source', label: 'Open source' },
]
