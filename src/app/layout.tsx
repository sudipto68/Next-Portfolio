import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Bricolage_Grotesque, Caveat, Figtree, IBM_Plex_Mono } from 'next/font/google'
import { getProfile } from '@/services/portfolioService'
import { SITE_URL, THEME_STORAGE_KEY } from '@/constants/site'
import SmoothScrollProvider from '@/context/SmoothScrollProvider'
import RevealObserver from '@/context/RevealObserver'
import Nav from '@/components/features/nav/Nav'
import Footer from '@/components/features/footer/Footer'
import './globals.css'

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz'], variable: '--font-bricolage', display: 'swap' })
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' })
const caveat = Caveat({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-caveat', display: 'swap' })

const themeBootstrap = `document.documentElement.classList.add('js');try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`

export async function generateMetadata(): Promise<Metadata> {
  const { seo, name } = await getProfile()
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: seo.title, template: `%s · ${name}` },
    description: seo.description,
    authors: [{ name }],
    alternates: { canonical: '/' },
    openGraph: { type: 'website', locale: 'en_US', title: seo.title, description: seo.description, siteName: name, url: '/' },
    twitter: { card: 'summary_large_image', title: seo.title, description: seo.description },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f8ff' },
    { media: '(prefers-color-scheme: dark)', color: '#070b16' },
  ],
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const profile = await getProfile()
  const fontVars = [bricolage, figtree, plexMono, caveat].map((f) => f.variable).join(' ')

  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <SmoothScrollProvider>
          <Nav profile={profile} />
          {children}
          <Footer profile={profile} />
        </SmoothScrollProvider>
        <RevealObserver />
      </body>
    </html>
  )
}
