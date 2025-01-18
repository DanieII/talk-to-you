import { deleteConversation } from "@/lib/conversations";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

type DeleteConversationProps = {
  conversationId: string;
};

export default function DeleteConversation({
  conversationId,
}: DeleteConversationProps) {
  const deleteConversationWithId = deleteConversation.bind(
    null,
    conversationId,
  );

  return (
    <form action={deleteConversationWithId}>
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
