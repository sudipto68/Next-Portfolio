import Image from 'next/image'
import type { ClientWork } from '@/types/portfolio'
import { GRADIENTS } from '@/constants/gradients'
import { cssVars } from '@/utils/cssVars'
import Chips from '@/components/ui/Chips'
import ArrowIcon from '@/components/ui/ArrowIcon'
import ExternalLink from '@/components/ui/ExternalLink'
import styles from './ClientWork.module.css'

interface ClientWorkCardProps {
  item: ClientWork
  index: number
}

export default function ClientWorkCard({ item, index }: ClientWorkCardProps) {
  return (
    <article className={styles.card} data-rise="" style={cssVars({ '--d': `${(index % 3) * 110}ms`, '--g': GRADIENTS.lime })}>
      <div className={styles.frame}>
        <div className={styles.window}>
          <span className={styles.bar} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <div className={styles.shot}>
            <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 360px" />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <Chips items={item.tags} />
        <div className={styles.links}>
          {item.liveUrl && (
            <ExternalLink href={item.liveUrl}>
              Live site <ArrowIcon />
            </ExternalLink>
          )}
          {item.sourceUrl && (
            <ExternalLink href={item.sourceUrl}>
              Source <ArrowIcon />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  )
}
