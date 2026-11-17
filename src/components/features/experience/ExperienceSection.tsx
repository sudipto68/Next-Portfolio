import type { Experience, Profile } from '@/types/portfolio'
import { formatRange } from '@/utils/formatRange'
import SplitHeading from '@/components/ui/SplitHeading'
import Timeline from './Timeline'

interface ExperienceSectionProps {
  profile: Profile
  experience: Experience[]
}

export default function ExperienceSection({ profile, experience }: ExperienceSectionProps) {
  const items = experience.map((x) => ({ ...x, when: formatRange(x.start, x.end) }))
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="center">
          <SplitHeading text={profile.copy.experienceHeading} />
          <p className="lead" data-rise="">
            {profile.copy.experienceIntro}
          </p>
        </div>
        <Timeline items={items} />
      </div>
    </section>
  )
}
