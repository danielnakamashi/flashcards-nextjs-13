import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { ProvidersList } from './components/ProvidersList'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect('/topics', RedirectType.replace)
  }

  return <ProvidersList />
}
