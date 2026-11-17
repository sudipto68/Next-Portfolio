import type { Education, Profile } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import styles from './Experience.module.css'

interface EducationSectionProps {
  profile: Profile
  education: Education[]
}

export default function EducationSection({ profile, education }: EducationSectionProps) {
  return (
    <section className="section" id="education" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="center">
          <SplitHeading text={profile.copy.educationHeading} />
        </div>
        <div className={styles.edu}>
          {education.map((x) => (
            <article key={x.degree} className={styles.card} data-rise="">
              <span className={styles.disc} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                  <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5M22 9v6" />
                </svg>
              </span>
              <div>
                <span className={styles.when}>
                  {x.startYear} – {x.endYear}
                </span>
                <h3>{x.degree}</h3>
                <p className={styles.org}>{x.org}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
