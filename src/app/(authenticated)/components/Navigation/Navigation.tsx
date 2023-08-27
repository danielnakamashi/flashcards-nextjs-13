import NavLink from 'next/link'
import { Box, Link } from '@radix-ui/themes'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <Box asChild width="max-content" p="4">
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink href="/topics" passHref legacyBehavior>
              <Link>Topics</Link>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  )
}
