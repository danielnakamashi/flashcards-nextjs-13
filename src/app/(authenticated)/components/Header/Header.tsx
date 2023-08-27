import { getServerSession } from 'next-auth'
import { Flex, Title } from '@mantine/core'
import { authOptions } from '@/lib/auth'
import { UserDropdown } from '../UserDropdown'
import styles from './Header.module.scss'

export async function Header() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.name || !session.user.image) {
    return null
  }

  const {
    user: { name, image },
  } = session

  return (
    <Flex
      align="center"
      justify="space-between"
      direction="row"
      px="lg"
      className={styles.container}
    >
      <Title order={1}>Flashcards NextJS 13</Title>
      <UserDropdown name={name} image={image} />
    </Flex>
  )
}
