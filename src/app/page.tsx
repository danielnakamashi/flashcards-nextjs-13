'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { RedirectType } from 'next/dist/client/components/redirect'

export default function Home() {
  const { status } = useSession()

  if (status === 'loading') {
    return <div>loading...</div>
  }

  if (status === 'unauthenticated') {
    return redirect('/api/auth/signin', RedirectType.replace)
  }

  redirect('/topics', RedirectType.replace)
}
