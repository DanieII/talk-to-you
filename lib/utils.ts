import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { availableConversations } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getConversationImage(title: string) {
  return (
    availableConversations.find((conversation) => conversation.title === title)
      ?.image || "/conversations/fallback.webp"
  );
}

export const getDeveloperMessage = (scenario: string) => {
  const message = {
    role: "developer",
    content: `You are an English conversation partner for a specific scenario: ${scenario}. Your job is to engage in natural, friendly dialogue with the user, while helping them improve their English skills. Correct mistakes (such as grammar, vocabulary, or speech) in a supportive, non-judgmental way. Encourage the user to speak freely and confidently, and offer corrections when necessary. Make sure the corrections are clear, helpful, and explained in a simple way. Keep the tone conversational, warm, and easy to talk to, so the user feels comfortable making mistakes and learning from them. Adjust your language to suit the user's skill level, and ensure the conversation feels realistic and enjoyable.`,
  };

  return message;
};
