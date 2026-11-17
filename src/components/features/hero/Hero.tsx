import type { Profile } from '@/types/portfolio'
import { renderEmphasis } from '@/utils/renderEmphasis'
import { buildCodeLines, codeVariableName } from '@/utils/buildCodeLines'
import ArrowIcon from '@/components/ui/ArrowIcon'
import HeroName from './HeroName'
import CodeCard from './CodeCard'
import NowCard from './NowCard'
import Stickers from './Stickers'
import styles from './Hero.module.css'

function heroSummary({ title, company, location, code }: Profile) {
  return [
    `${title} at ${company}, based in ${location}.`,
    `Front end: ${code.frontend.join(', ')}.`,
    `Back end: ${code.backend.join(', ')}.`,
    `CMS: ${code.cms.join(', ')}.`,
    `Maintains the Backdrop modules ${code.maintains.join(' and ')}.`,
  ].join(' ')
}

export default function Hero({ profile }: { profile: Profile }) {
  const { copy } = profile
  return (
    <section className={styles.hero} id="hero">
      <span className={`${styles.cloud} ${styles.c1}`} aria-hidden="true" />
      <span className={`${styles.cloud} ${styles.c2}`} aria-hidden="true" />
      <span className={`${styles.cloud} ${styles.c3}`} aria-hidden="true" />
      <div className={`wrap ${styles.grid}`}>
        <div>
          <span className={`chip dot ${styles.chip}`}>{copy.heroChip}</span>
          <HeroName name={profile.name} />
          <p className={styles.lede}>{renderEmphasis(copy.heroLede)}</p>
          <div className={styles.cta}>
            <a className="btn btn-lime" href="#work">
              {copy.heroPrimary} <ArrowIcon />
            </a>
            <a className="btn btn-glass" href="#experience">
              {copy.heroSecondary}
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <CodeCard fileName={`${codeVariableName(profile)}.ts`} lines={buildCodeLines(profile)} />
          <NowCard text={profile.rightNow} />
          <Stickers stickers={profile.stickers} />
          <span className={`hand ${styles.hint}`} aria-hidden="true">
            <svg viewBox="0 0 44 34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 30C30 30 12 26 6 6" />
              <path d="M2 14 6 5l9 4" />
            </svg>
            {copy.stickerHint}
          </span>
          <p className="sr-only">{heroSummary(profile)}</p>
        </div>
      </div>
    </section>
  )
}
