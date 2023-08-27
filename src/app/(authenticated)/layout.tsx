import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Flex, Box } from '@radix-ui/themes'
import NextAuthProvider from './providers/NextAuthProvider'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <NextAuthProvider>
      <Header />
      <Flex p="4" gap="9">
        <Navigation />
        <Box asChild p="4" width="100%">
          <main>{children}</main>
        </Box>
      </Flex>
    </NextAuthProvider>
  )
}
