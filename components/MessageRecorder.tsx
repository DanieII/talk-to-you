"use client";

import { createMessage } from "@/lib/conversations";
import { Mic } from "lucide-react";

type MessageRecorderProps = {
  conversationId: string;
};

export default function MessageRecorder({
  conversationId,
}: MessageRecorderProps) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Mic
          className="cursor-pointer text-primary"
          size="44"
          onClick={() => createMessage(conversationId, "Hello World")}
        />
      </div>
    </div>
  );
}
