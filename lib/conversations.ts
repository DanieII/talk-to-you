"use server";

import { db } from "@/db";
import { conversations } from "@/db/schema/conversations";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { desc, eq } from "drizzle-orm";

export async function createConversation(title: string) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin?callbackUrl=/conversations/start");

  await db.insert(conversations).values({ userId: session.user.id, title });
}

export async function getUserConversations(userId: string) {
  const userConversations = await db
    .select()
    .from(conversations)
    .where(eq(conversations.userId, userId))
    .orderBy(desc(conversations.createdAt));

  return userConversations;
}
