import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid
      }
      return session
    },
    jwt: async ({ user, account, token }) => {
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id
      }
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
}
