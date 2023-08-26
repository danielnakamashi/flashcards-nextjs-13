import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import NextAuthProvider from '@/components/NextAuthProvider'
import { authOptions } from '@/lib/auth'
import { Header } from './components/Header'
import { Flex } from '@radix-ui/themes'

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
      <Flex p="4">
        <nav>Navigation</nav>
        <main>{children}</main>
      </Flex>
    </NextAuthProvider>
  )
}
