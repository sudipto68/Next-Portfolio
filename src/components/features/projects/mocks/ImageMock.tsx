import Image from 'next/image'
import type { ImageAsset } from '@/types/portfolio'
import styles from '../Projects.module.css'

export default function ImageMock({ image }: { image: ImageAsset }) {
  return (
    <div className={`${styles.mock} ${styles.image}`}>
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 88vw, 430px" />
    </div>
  )
}
