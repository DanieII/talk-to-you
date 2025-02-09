import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import ConversationCard from "@/components/ConversationCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserConversations } from "@/lib/conversations";
import DeleteConversation from "@/components/DeleteConversation";

export default async function Conversations() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const userConversations = await getUserConversations(session.user.id);

  return (
    <div className="container mx-auto flex flex-col gap-8 p-8">
      <h1 className="text-center text-3xl font-bold">Your Conversations</h1>
      <Link className="mx-auto" href="/conversations/start">
        <Button size="lg">
          <MessageCircle /> Start a conversation
        </Button>
      </Link>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {userConversations.map((conversation) => (
          <div className="relative h-full" key={conversation.id}>
            <DeleteConversation conversationId={conversation.id} />
            <Link href={`/conversations/${conversation.id}`}>
              <ConversationCard
                title={conversation.title}
                additionalData={[
                  conversation.createdAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "numeric",
                  }),
                ]}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
