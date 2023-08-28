import prisma from '@/lib/prisma'

export async function getTopicBySlug(slug: string) {
  return prisma.topic.findUnique({
    where: {
      slug,
    },
    include: {
      cards: true,
    },
  })
}
