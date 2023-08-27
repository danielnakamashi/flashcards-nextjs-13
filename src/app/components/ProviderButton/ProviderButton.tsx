'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@radix-ui/themes'

export function ProviderButton({ id, name }: { id: string; name: string }) {
  return (
    <Button key={id} onClick={() => signIn(id)} variant="outline" size="4">
      Continue with {name}
    </Button>
  )
}
