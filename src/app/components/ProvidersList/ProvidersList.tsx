import { getProviders } from 'next-auth/react'
import { Flex } from '@radix-ui/themes'
import { ProviderButton } from '../ProviderButton'
import styles from './ProvidersList.module.scss'

export async function ProvidersList() {
  const providers = (await getProviders()) ?? []

  return (
    <Flex align="center" justify="center" p="9" asChild>
      <ul>
        {Object.values(providers).map(({ id, name }) => (
          <li key={id} className={styles.listItem}>
            <ProviderButton name={name} id={id} />
          </li>
        ))}
      </ul>
    </Flex>
  )
}
