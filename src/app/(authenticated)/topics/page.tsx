import { getServerSession } from 'next-auth'
import { Title, Flex, Box } from '@mantine/core'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'
import { getTopicsByUser } from '@/actions/getTopicsByUser'
import { List, ListItem } from '@/app/components/List'

export default async function TopicsPage() {
  const session = await getServerSession(authOptions)
  const topics = await getTopicsByUser(session!.user.id)

  return (
    <Box p="lg">
      <Flex direction="column" gap="lg">
        <Title>Topics</Title>
        <List listStyleType="none" size="lg">
          {topics.map(({ id, slug, name }) => (
            <ListItem key={id}>
              <Link href={`/topic/${slug}`}>{name}</Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  )
}
