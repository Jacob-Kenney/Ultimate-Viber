import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Apple from "next-auth/providers/apple" // Not free (need developer program)
import GitHub from "next-auth/providers/github"
// import Twitter from "next-auth/providers/twitter" // Need twitter account
import Resend from "next-auth/providers/resend"

import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv();
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: UpstashRedisAdapter(redis),
  providers: [Google, GitHub, Resend],
  pages: {
    signIn: "/login",
  }
})