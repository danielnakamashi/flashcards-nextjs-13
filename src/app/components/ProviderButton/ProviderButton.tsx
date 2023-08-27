'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@mantine/core'

export function ProviderButton({ id, name }: { id: string; name: string }) {
  return <Button onClick={() => signIn(id)}>Continue with {name}</Button>
}
