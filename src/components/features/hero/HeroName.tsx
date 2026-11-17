import styles from './Hero.module.css'

export default function HeroName({ name }: { name: string }) {
  const [first, ...rest] = name.split(' ')
  return (
    <h1 className={styles.name} aria-label={name}>
      {[first, rest.join(' ')].map((line) => (
        <span key={line} className={styles.line} aria-hidden="true">
          <span>{line}</span>
        </span>
      ))}
    </h1>
  )
}
