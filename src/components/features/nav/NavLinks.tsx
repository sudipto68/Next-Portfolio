'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavLink } from '@/constants/site'

interface NavLinksProps {
  links: NavLink[]
  className?: string
}

export default function NavLinks({ links, className }: NavLinksProps) {
  const pathname = usePathname()
  return (
    <div className={className}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} aria-current={link.href === pathname ? 'page' : undefined}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}
