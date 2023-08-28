'use server'

import { getServerSession } from 'next-auth'
import kebabCase from 'lodash/kebabCase'
import { authOptions } from '@/lib/auth'
import type { AddTopicForm } from '@/schemas/addTopicForm'
import prisma from '@/lib/prisma'

export async function addTopic(
  data: AddTopicForm,
): Promise<
  | { success: false; error: string }
  | { success: true; data: Awaited<ReturnType<typeof prisma.topic.create>> }
> {
  const session = await getServerSession(authOptions)

  if (!session) {
    return { success: false, error: 'User not authenticated' }
  }

  const topic = await prisma.topic.create({
    data: {
      name: data.name,
      slug: kebabCase(data.name),
      userId: session.user.id,
      isPublic: false,
      cards: {
        create: data.cards,
      },
    },
  })

  return { success: true, data: topic }
}
