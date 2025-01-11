import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    theme: { logo: "http://localhost:3000/talk-to-you.webp" },
});
