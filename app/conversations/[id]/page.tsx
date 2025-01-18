import { auth } from "@/auth";
import Message from "@/components/Message";
import MessageRecorder from "@/components/MessageRecorder";
import { getConversation, getMessages } from "@/lib/conversations";
import { redirect } from "next/navigation";

type ConversationProps = {
  params: { id: string };
};

export default async function Conversation({ params }: ConversationProps) {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const { id: conversationId } = await params;

  // Validate if id exists and conversation belongs to user
  const conversation = await getConversation(conversationId);
  if (!conversation || conversation.userId !== session.user.id) {
    redirect("/404");
  }

  const messages = await getMessages(conversationId);

  return (
    <div className="container mx-auto flex flex-grow flex-col p-8">
      <div>
        {messages.map((message, index) => (
          <Message key={index} content={message.content} />
        ))}
      </div>
      <div className="mt-auto">
        <MessageRecorder conversationId={conversationId} />
      </div>
    </div>
  );
}
