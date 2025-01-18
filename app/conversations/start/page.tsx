"use client";

import ConversationCard from "@/components/ConversationCard";
import { createConversation } from "@/lib/conversations";
import { availableConversations } from "@/lib/constants";

export default function StartConversation() {
  return (
    <div className="container mx-auto flex flex-col gap-8 p-8">
      <h1 className="text-center text-3xl font-bold">Start a conversation</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {availableConversations.map((conversation, index) => (
          <div
            className="h-full"
            key={index}
            onClick={() => createConversation(conversation.title)}
          >
            <ConversationCard title={conversation.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
