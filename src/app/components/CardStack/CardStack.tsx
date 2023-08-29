'use client'

import * as React from 'react'
import { Box, Flex, Button, Center } from '@mantine/core'
import cn from 'classnames'
import { Card } from '@/app/components/Card'
import styles from './CardStack.module.scss'

function getCyclingIndex(index: number, max: number): number {
  return (max + index) % max
}

export function CardStack({
  cards,
  isCircular = true,
}: {
  cards: { question: string; answer: string }[]
  isCircular?: boolean
}) {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
  const [isAnimatingTo, setIsAnimatingTo] = React.useState<
    'nextCard' | 'prevCard' | null
  >(null)

  const nextCardButtonClickHandler = () => {
    if (isCircular || currentCardIndex < cards.length - 1) {
      setIsAnimatingTo('nextCard')
    }
  }
  const prevCardButtonClickHandler = () => {
    if (isCircular || currentCardIndex > 0) {
      setIsAnimatingTo('prevCard')
    }
  }
  const nextCardAnimationEnded = () => {
    setIsAnimatingTo(null)
    setCurrentCardIndex((index) => getCyclingIndex(index + 1, cards.length))
  }
  const prevCardAnimationEnded = () => {
    setIsAnimatingTo(null)
    setCurrentCardIndex((index) => getCyclingIndex(index - 1, cards.length))
  }

  return (
    <Center>
      <Flex direction="column" gap="lg">
        <Box className={styles.container}>
          {isAnimatingTo === 'nextCard' && (
            <Box className={cn(styles.inner, styles.backCard)}>
              <Card
                question={
                  cards[getCyclingIndex(currentCardIndex + 1, cards.length)]
                    ?.question ?? ''
                }
                answer={
                  cards[getCyclingIndex(currentCardIndex + 1, cards.length)]
                    ?.answer ?? ''
                }
              />
            </Box>
          )}
          {isAnimatingTo === 'prevCard' && (
            <Box
              className={cn(
                styles.inner,
                styles.backCard,
                styles.prevCardAnimation,
              )}
              onAnimationEnd={prevCardAnimationEnded}
            >
              <Card
                question={
                  cards[getCyclingIndex(currentCardIndex - 1, cards.length)]
                    ?.question ?? ''
                }
                answer={
                  cards[getCyclingIndex(currentCardIndex - 1, cards.length)]
                    ?.answer ?? ''
                }
              />
            </Box>
          )}
          <Box
            className={cn(styles.inner, styles.frontCard, {
              [styles.nextCardAnimation]: isAnimatingTo === 'nextCard',
            })}
            onAnimationEnd={nextCardAnimationEnded}
          >
            <Card
              key={currentCardIndex}
              question={cards[currentCardIndex]?.question ?? ''}
              answer={cards[currentCardIndex]?.answer ?? ''}
            />
          </Box>
        </Box>
        <Flex justify="space-between">
          <Button onClick={prevCardButtonClickHandler}>Previous card</Button>
          <Button onClick={nextCardButtonClickHandler}>Next card</Button>
        </Flex>
      </Flex>
    </Center>
  )
}
