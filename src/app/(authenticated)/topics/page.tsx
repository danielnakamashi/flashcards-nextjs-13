import { Title, Flex, Box, Group } from '@mantine/core'
import { Card } from '@/app/components/Card'

export default function TopicsPage() {
  return (
    <Box p="lg">
      <Flex direction="column" gap="lg">
        <Title>Topics</Title>
        <Group>
          <Card />
        </Group>
      </Flex>
    </Box>
  )
}
