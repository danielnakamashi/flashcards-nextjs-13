import * as React from 'react'
import { Box, Flex, Text } from '@radix-ui/themes'
import { CardInner } from './CardInner'
import styles from './Card.module.scss'

export function Card() {
  return (
    <Box className={styles.container}>
      <CardInner>
        <Flex className={styles.front} justify="center" align="center">
          <Text size="7">Question</Text>
        </Flex>
        <Flex className={styles.back} justify="center" align="center">
          <Text size="7">Answer</Text>
        </Flex>
      </CardInner>
    </Box>
  )
}
