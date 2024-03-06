import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GoogleCredentials from "@/mocks/credentials.json"
import type { User, Account, Profile } from "next-auth"
import type { AdapterUser } from "next-auth/adapters"
import { promise } from "zod"
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || GoogleCredentials.web.client_id,
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || GoogleCredentials.web.client_secret,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      user: User
      account: Account | null
      profile?: Profile | undefined
      email?: { verificationRequest?: boolean | undefined } | undefined
      credentials?: Record<string, string | Blob> | undefined
    }) {
      console.log(user, account, profile)
      return true
    },
  },
})
