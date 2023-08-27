import Link from 'next/link'
import { NavLink, Box } from '@mantine/core'

export function Navigation() {
  return (
    <Box>
      <NavLink label="Topics" component={Link} href="/topics" />
      <NavLink label="Add Topic" component={Link} href="/add-topic" />
    </Box>
  )
}
