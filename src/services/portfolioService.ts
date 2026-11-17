import profileData from '@/data/profile.json'
import projectsData from '@/data/projects.json'
import experienceData from '@/data/experience.json'
import educationData from '@/data/education.json'
import openSourceData from '@/data/openSource.json'
import clientWorkData from '@/data/clientWork.json'
import type {
  ClientWork,
  Education,
  Experience,
  OpenSourceItem,
  PortfolioData,
  Profile,
  Project,
} from '@/types/portfolio'

const byStartDesc = (a: Experience, b: Experience) => b.start.localeCompare(a.start)

export async function getProfile(): Promise<Profile> {
  try {
    return profileData as Profile
  } catch (error) {
    console.error('[getProfile]', error)
    throw error
  }
}

export async function getClientWork(): Promise<ClientWork[]> {
  try {
    return clientWorkData as ClientWork[]
  } catch (error) {
    console.error('[getClientWork]', error)
    throw error
  }
}

export async function getPortfolio(): Promise<PortfolioData> {
  try {
    const [profile, clientWork] = await Promise.all([getProfile(), getClientWork()])
    return {
      profile,
      clientWork,
      projects: projectsData as Project[],
      experience: [...(experienceData as Experience[])].sort(byStartDesc),
      education: [...(educationData as Education[])].sort((a, b) => b.endYear - a.endYear),
      openSource: openSourceData as OpenSourceItem[],
    }
  } catch (error) {
    console.error('[getPortfolio]', error)
    throw error
  }
}
