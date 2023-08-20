import { GoogleSigninButton } from '@/components/GoogleSigninButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <GoogleSigninButton />
    </main>
  )
}
