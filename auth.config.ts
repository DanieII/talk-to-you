import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
  session: { strategy: "jwt" },
  providers: [Google],
  theme: { logo: "http://localhost:3000/talk-to-you.webp" },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
} satisfies NextAuthConfig;
