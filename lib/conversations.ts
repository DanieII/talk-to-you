"use server";

import { db } from "@/db";
import { conversations } from "@/db/schema/conversations";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createConversation(title: string) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin?callbackUrl=/conversations/start");

  const [insertedRows] = await db
    .insert(conversations)
    .values({ userId: session.user.id, title })
    .returning({ id: conversations.id });
  const newConversationId = insertedRows.id;

  redirect(`/conversations/${newConversationId}`);
}

export async function getUserConversations(userId: string) {
  const userConversations = await db
    .select()
    .from(conversations)
    .where(eq(conversations.userId, userId));

  return userConversations;
}

export async function removeConversation(conversationId: string) {
  const session = await auth();
  if (!session) redirect("api/auth/signin");

  await db
    .delete(conversations)
    .where(
      and(
        eq(conversations.id, conversationId),
        eq(conversations.userId, session.user.id),
      ),
    );

  revalidatePath("/conversations");
}
