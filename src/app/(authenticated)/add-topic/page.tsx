'use client'

import * as React from 'react'
import { Title, Flex, Box, Input, InputWrapper, Button } from '@mantine/core'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { addTopicFormSchema, AddTopicForm } from '@/schemas/addTopicForm'
import { addTopic } from '@/actions/addTopic'
import styles from './page.module.scss'

export default function AddTopicPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<AddTopicForm>({
    resolver: zodResolver(addTopicFormSchema),
  })
  const { fields, append, remove } = useFieldArray({ control, name: 'cards' })
  const onSubmit = async (values: AddTopicForm) => {
    await addTopic(values)
    router.push('/topics')
  }

  return (
    <Box p="lg">
      <Flex direction="column" gap="lg">
        <Title order={2}>Add Topic</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="md">
            <InputWrapper
              label="Topic name"
              withAsterisk
              error={errors?.name?.message}
            >
              <Input {...register('name')} />
            </InputWrapper>
            <Title order={4}>Cards</Title>
            {fields.map((field, index) => (
              <Flex gap="lg" key={field.id}>
                <InputWrapper
                  label="Question"
                  withAsterisk
                  className={styles.question}
                  error={errors?.cards?.[index]?.question?.message}
                >
                  <Input {...register(`cards.${index}.question`)} />
                </InputWrapper>
                <InputWrapper
                  label="Answer"
                  withAsterisk
                  className={styles.answer}
                  error={errors?.cards?.[index]?.answer?.message}
                >
                  <Input {...register(`cards.${index}.answer`)} />
                </InputWrapper>
                <Button
                  className={styles.deleteButton}
                  variant="subtle"
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </Flex>
            ))}
            <Flex gap="md">
              <Button
                variant="outline"
                onClick={() => append({ question: '', answer: '' })}
              >
                Add new card
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Box>
  )
}
