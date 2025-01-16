import { removeConversation } from "@/lib/conversations";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

type RemoveConversationProps = {
  conversationId: string;
};

export default function RemoveConversation({
  conversationId,
}: RemoveConversationProps) {
  const removeConversationWithId = removeConversation.bind(
    null,
    conversationId,
  );

  return (
    <form action={removeConversationWithId}>
      <Button
        className="absolute right-4 top-4"
        variant="destructive"
        size="icon"
      >
        <Trash />
      </Button>
    </form>
  );
}
