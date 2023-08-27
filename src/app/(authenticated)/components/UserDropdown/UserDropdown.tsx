'use client'

import Image from 'next/image'
import { Menu, UnstyledButton, Group, Text } from '@mantine/core'
import { signOut } from 'next-auth/react'
import styles from './UserDropdown.module.scss'

export function UserDropdown({ name, image }: { name: string; image: string }) {
  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Text>{name}</Text>
            <Image
              src={image}
              alt="Profile picture"
              width={20}
              height={20}
              className={styles.profilePicture}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => signOut()}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
