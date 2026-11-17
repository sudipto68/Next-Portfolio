import styles from './Hero.module.css'

export default function NowCard({ text }: { text: string }) {
  return (
    <div className={styles.now}>
      <small className="live">Right now</small>
      <p>{text}</p>
    </div>
  )
}
