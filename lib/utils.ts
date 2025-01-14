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
