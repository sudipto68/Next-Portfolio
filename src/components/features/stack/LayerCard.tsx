import type { Layer } from '@/types/portfolio'
import Chips from '@/components/ui/Chips'
import { cssVars } from '@/utils/cssVars'
import Shape from './Shape'
import styles from './Stack.module.css'

export default function LayerCard({ layer, index }: { layer: Layer; index: number }) {
  return (
    <article className={styles.card} data-rise="" style={cssVars({ '--d': `${index * 110}ms` })}>
      <div className={styles.txt}>
        <h3>{layer.title}</h3>
        <p>{layer.text}</p>
        <Chips items={layer.chips} />
      </div>
      <div className={styles.shape}>
        <Shape kind={layer.shape} />
      </div>
    </article>
  )
}
