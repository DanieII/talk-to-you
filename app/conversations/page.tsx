import { Button } from "@/components/ui/button";
import ConversationCard from "@/components/ConversationCard";
import { MessageCircle } from "lucide-react";

const conversations = [
  {
    title: "Job Interview",
    description: "Practice for upcoming interviews with tailored questions.",
    image: "https://picsum.photos/500",
  },
  {
    title: "Casual Chat",
    description: "Have a friendly conversation about anything you like.",
    image: "https://picsum.photos/500",
  },
  {
    title: "Job Interview",
    description: "Practice for upcoming interviews with tailored questions.",
    image: "https://picsum.photos/500",
  },
  {
    title: "Casual Chat",
    description: "Have a friendly conversation about anything you like.",
    image: "https://picsum.photos/500",
  },
];

export default function Conversations() {
  return (
    <div className="container mx-auto flex flex-col p-4">
      <h1 className="py-4 text-center text-3xl font-bold">
        Your Conversations
      </h1>
      <Button className="mx-auto my-4" size="lg">
        <MessageCircle /> Start a conversation
      </Button>
      <div className="flex flex-wrap justify-around gap-4 py-4">
        {conversations.map((conversation, index) => (
          <ConversationCard
            key={index}
            title={conversation.title}
            description={conversation.description}
            image={conversation.image}
          />
        ))}
      </div>
    </div>
  );
}
