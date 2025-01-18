"use server";

import { db } from "@/db";
import { conversations, messages } from "@/db/schema/conversations";
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

export async function getConversation(conversationId: string) {
  const conversation = await db.query.conversations.findFirst({
    where: eq(conversations.id, conversationId),
  });

  return conversation;
}

export async function deleteConversation(conversationId: string) {
  await db.delete(conversations).where(eq(conversations.id, conversationId));

  revalidatePath("/conversations");
}

export async function createMessage(conversationId: string, message: string) {
  await db
    .insert(messages)
    .values({ conversationId, role: "user", content: message });

  revalidatePath(`/conversations/${conversationId}`);
}

export async function getMessages(conversationId: string) {
  const conversationMessages = await db
    .select({ role: messages.role, content: messages.content })
    .from(messages)
    .where(eq(messages.conversationId, conversationId));

  return conversationMessages;
}
