import { Heading, Flex } from '@radix-ui/themes'
import { Card } from '@/app/components/Card'

export default function TopicsPage() {
  return (
    <Flex direction="column" gap="9">
      <Heading as="h2">Topics</Heading>
      <ul>
        <li>
          <Card />
        </li>
      </ul>
    </Flex>
  )
}
