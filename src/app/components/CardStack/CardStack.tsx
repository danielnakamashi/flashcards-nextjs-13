'use client'

import * as React from 'react'
import { Box, Flex, Button } from '@mantine/core'
import cn from 'classnames'
import { Card } from '@/app/components/Card'
import styles from './CardStack.module.scss'

export function CardStack({
  cards,
}: {
  cards: { question: string; answer: string }[]
}) {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0)
  const [showNextCard, setShowNextCard] = React.useState(false)
  const [showPrevCard, setShowPrevCard] = React.useState(false)
  const frontCardRef = React.useRef<HTMLDivElement>(null)
  const backCardRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const nextCardClickHandler = () => {
    if (currentCardIndex < cards.length - 1) {
      setShowNextCard(true)
    }
  }
  const prevCardClickHandler = () => {
    if (currentCardIndex > 0) {
      setShowPrevCard(true)
    }
  }

  React.useEffect(() => {
    const frontCardEl = frontCardRef.current
    const animationEndHandler = () => {
      setShowNextCard(false)
      setCurrentCardIndex((index) => index + 1)
    }
    frontCardEl?.addEventListener('animationend', animationEndHandler, false)

    return () => {
      frontCardEl?.removeEventListener('animationend', animationEndHandler)
    }
  }, [])
  React.useEffect(() => {
    const backCardEl = backCardRef.current
    const animationEndHandler = () => {
      setShowPrevCard(false)
      setCurrentCardIndex((index) => index - 1)
    }
    backCardEl?.addEventListener('animationend', animationEndHandler, false)

    return () => {
      backCardEl?.removeEventListener('animationend', animationEndHandler)
    }
  }, [showPrevCard])

  return (
    <Flex direction="column" gap="lg">
      <Box className={styles.container} ref={containerRef}>
        {showNextCard && (
          <Box className={cn(styles.inner, styles.backCard)}>
            <Card
              question={cards[currentCardIndex + 1]?.question ?? ''}
              answer={cards[currentCardIndex + 1]?.answer ?? ''}
            />
          </Box>
        )}
        {showPrevCard && (
          <Box
            className={cn(styles.inner, styles.backCard, {
              [styles.prevCardAnimation]: showPrevCard,
            })}
            ref={backCardRef}
          >
            <Card
              question={cards[currentCardIndex - 1]?.question ?? ''}
              answer={cards[currentCardIndex - 1]?.answer ?? ''}
            />
          </Box>
        )}
        <Box
          className={cn(styles.inner, styles.frontCard, {
            [styles.nextCardAnimation]: showNextCard,
          })}
          ref={frontCardRef}
        >
          <Card
            key={currentCardIndex}
            question={cards[currentCardIndex]?.question ?? ''}
            answer={cards[currentCardIndex]?.answer ?? ''}
          />
        </Box>
      </Box>
      <Flex justify="space-between">
        <Button
          onClick={() => {
            prevCardClickHandler()
          }}
        >
          Previous card
        </Button>
        <Button
          onClick={() => {
            nextCardClickHandler()
          }}
        >
          Next card
        </Button>
      </Flex>
    </Flex>
  )
}
