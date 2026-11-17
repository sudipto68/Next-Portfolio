import type { Profile } from '@/types/portfolio'
import SplitHeading from '@/components/ui/SplitHeading'
import LayerCard from './LayerCard'
import styles from './Stack.module.css'

export default function StackSection({ profile }: { profile: Profile }) {
  const { copy, layers } = profile
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <div className={styles.split}>
          <div>
            <SplitHeading text={copy.stackHeading} />
            <p className={`hand ${styles.hand}`} aria-hidden="true">
              {copy.stackHand}
            </p>
          </div>
          <p className={`lead ${styles.intro}`} data-rise="">
            {copy.stackIntro}
          </p>
        </div>
        <div className={styles.tri}>
          {layers.map((layer, i) => (
            <LayerCard key={layer.title} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
