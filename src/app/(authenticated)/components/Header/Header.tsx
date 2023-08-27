import { getServerSession } from 'next-auth'
import { Heading, Flex } from '@radix-ui/themes'
import { authOptions } from '@/lib/auth'
import { UserDropdown } from '../UserDropdown'

export async function Header() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.name || !session.user.image) {
    return null
  }

  const {
    user: { name, image },
  } = session

  return (
    <Flex align="center" justify="between" p="4" asChild>
      <header>
        <Heading>Flashcards NextJS 13</Heading>
        <UserDropdown name={name} image={image} />
      </header>
    </Flex>
  )
}
