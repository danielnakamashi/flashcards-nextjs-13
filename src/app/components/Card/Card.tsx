import * as React from 'react'
import { Box, Flex, Text } from '@mantine/core'
import cn from 'classnames'
import { CardInner } from './CardInner'
import styles from './Card.module.scss'

export function Card({
  className,
  question,
  answer,
}: {
  question: string
  answer: string
  className?: string
}) {
  return (
    <Box className={cn(styles.container, className)}>
      <CardInner>
        <Flex className={styles.front} justify="center" align="center">
          <Text fz="lg">{question}</Text>
        </Flex>
        <Flex className={styles.back} justify="center" align="center">
          <Text fz="lg">{answer}</Text>
        </Flex>
      </CardInner>
    </Box>
  )
}
