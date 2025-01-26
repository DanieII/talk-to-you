import { auth } from "@/auth";
import MessageRecorder from "@/components/MessageRecorder";
import Messages from "@/components/Messages";
import { MessagesProvider } from "@/contexts/MessagesContext";
import { SpeechSynthesisProvider } from "@/contexts/SpeechSynthesisContext";
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
    <MessagesProvider>
      <SpeechSynthesisProvider>
        <div className="container mx-auto flex flex-grow flex-col p-8">
          <div className="mb-20">
            <Messages initialMessages={messages} />
          </div>
          <div className="fixed bottom-0 left-0 h-28 w-full border border-t-neutral-100 bg-background">
            <MessageRecorder
              scenario={conversation.title}
              conversationId={conversationId}
            />
          </div>
        </div>
      </SpeechSynthesisProvider>
    </MessagesProvider>
  );
}
