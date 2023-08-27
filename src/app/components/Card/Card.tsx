import * as React from 'react'
import { Box, Flex, Text } from '@mantine/core'
import { CardInner } from './CardInner'
import styles from './Card.module.scss'

export function Card() {
  return (
    <Box className={styles.container}>
      <CardInner>
        <Flex className={styles.front} justify="center" align="center">
          <Text fz="lg">Question</Text>
        </Flex>
        <Flex className={styles.back} justify="center" align="center">
          <Text fz="lg">Answer</Text>
        </Flex>
      </CardInner>
    </Box>
  )
}
