"use client";

import ConversationCard from "@/components/ConversationCard";
import { createConversation } from "@/lib/conversations";
import { availableConversations } from "@/lib/constants";

export default function StartConversation() {
  return (
    <div className="container mx-auto flex flex-col gap-8 p-8">
      <h1 className="text-center text-3xl font-bold">Start a conversation</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {availableConversations.map((conversation, index) => (
          <div
            className="lg:basis-[30%]"
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
