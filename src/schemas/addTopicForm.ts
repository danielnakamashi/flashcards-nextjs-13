import { z } from 'zod'

export const addTopicFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  cards: z.array(
    z.object({
      question: z.string().min(1, 'Question is required'),
      answer: z.string().min(1, 'Answer is required'),
    }),
  ),
})

export type AddTopicForm = z.infer<typeof addTopicFormSchema>
