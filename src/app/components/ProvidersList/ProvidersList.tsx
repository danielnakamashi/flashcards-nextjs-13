import { getProviders } from 'next-auth/react'
import { Container, Center } from '@mantine/core'
import { ProviderButton } from '../ProviderButton'

export async function ProvidersList() {
  const providers = (await getProviders()) ?? []

  return (
    <Container size="xs">
      <Center>
        {Object.values(providers).map(({ id, name }) => (
          <ProviderButton key={id} name={name} id={id} />
        ))}
      </Center>
    </Container>
  )
}
