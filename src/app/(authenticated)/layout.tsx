import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import {
  AppShell,
  Header as AppShellHeader,
  Navbar as AppShellNavbar,
  Main as AppShellMain,
} from '@/app/components/AppShell'
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
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm' }}
      >
        <AppShellHeader>
          <Header />
        </AppShellHeader>
        <AppShellNavbar p="md">
          <Navigation />
        </AppShellNavbar>
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </NextAuthProvider>
  )
}
