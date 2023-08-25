import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import NextAuthProvider from '@/components/NextAuthProvider'
import { authOptions } from '@/lib/auth'
import { Header } from './components/Header'

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
      <nav>Navigation</nav>
      <main>{children}</main>
    </NextAuthProvider>
  )
}
