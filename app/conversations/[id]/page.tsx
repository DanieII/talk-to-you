import { auth } from "@/auth";
import { db } from "@/db";
import { conversations } from "@/db/schema/conversations";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

type ConversationProps = {
  params: { id: string };
};

export default async function Conversation({ params }: ConversationProps) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const { id } = await params;
  const [conversationRows] = await db
    .select({ conversationTitle: conversations.title })
    .from(conversations)
    .where(
      and(eq(conversations.id, id), eq(conversations.userId, session.user.id)),
    );
  const { conversationTitle } = conversationRows;

  return (
    <div className="container mx-auto flex flex-grow flex-col p-8">
      <h1 className="text-center text-2xl font-bold">{conversationTitle}</h1>
      <div className="flex flex-col">
        <div className="flex-grow">
          <div>
            <p>Chat</p>
          </div>
        </div>
        <div>
          <div>
            <p>Speak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
