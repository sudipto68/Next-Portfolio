import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects'].map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: 'monthly' }))
}
