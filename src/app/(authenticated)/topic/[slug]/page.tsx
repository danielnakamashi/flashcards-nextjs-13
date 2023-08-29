import { Title, Flex, Box, Group } from '@mantine/core'
import { CardStack } from '@/app/components/CardStack'
import { getTopicBySlug } from '@/actions/getTopicBySlug'

export default async function TopicPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const topic = await getTopicBySlug(slug)

  return (
    <Box p="lg">
      <Flex direction="column" gap="lg">
        <Title>{topic?.name}</Title>
        <CardStack cards={topic?.cards ?? []} />
      </Flex>
    </Box>
  )
}
