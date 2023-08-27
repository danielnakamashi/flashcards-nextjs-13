'use client'

import * as React from 'react'
import { Box } from '@radix-ui/themes'
import cn from 'classnames'
import styles from './CardInner.module.scss'

export function CardInner({ children }: { children: React.ReactNode }) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <Box
      className={cn(styles.card, {
        [styles.flipped]: isFlipped,
      })}
      onClick={() => {
        setIsFlipped((state) => !state)
      }}
    >
      {children}
    </Box>
  )
}
