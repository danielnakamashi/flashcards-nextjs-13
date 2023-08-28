import prisma from '@/lib/prisma'

export async function getTopicsByUser(userId: string) {
  return prisma.topic.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      slug: true,
      name: true,
    },
  })
}
