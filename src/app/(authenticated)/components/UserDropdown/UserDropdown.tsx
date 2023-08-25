'use client'

import Image from 'next/image'
import { DropdownMenu, Button } from '@radix-ui/themes'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { signOut } from 'next-auth/react'
import styles from './UserDropdown.module.scss'

export function UserDropdown({ name, image }: { name: string; image: string }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost" size="4" radius="small">
          {name}
          <Image
            src={image}
            alt="Profile picture"
            width={36}
            height={36}
            className={styles.profilePicture}
          />
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft" size="2">
        <DropdownMenu.Item onClick={() => signOut()}>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
