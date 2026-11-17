import styles from '../Projects.module.css'

export default function ChatMock() {
  return (
    <div className={`${styles.mock} ${styles.chat}`} aria-hidden="true">
      <span className={styles.chatHead}>DESCO bot</span>
      <span className={styles.bub}>
        <b>Balance is low</b>84 TK left. Your threshold is 100 TK.<time>09:00</time>
      </span>
      <span className={styles.bub}>
        Recharge soon.<time>09:00</time>
      </span>
    </div>
  )
}
