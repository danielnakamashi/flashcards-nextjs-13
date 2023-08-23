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
    return <h1>Home Page</h1>
  }

  redirect('/topics', RedirectType.replace)
}
