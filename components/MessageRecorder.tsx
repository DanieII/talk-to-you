"use client";

import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { createMessage } from "@/lib/conversations";
import { Mic } from "lucide-react";

type MessageRecorderProps = {
  conversationId: string;
};

export default function MessageRecorder({
  conversationId,
}: MessageRecorderProps) {
  const { isListening, transcript, error, toggleListening } =
    useSpeechRecognition();

  return (
    <div>
      <div className="flex items-center justify-center">
        {error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <div>
            <Mic
              className={`cursor-pointer ${isListening ? "text-destructive" : "text-primary"}`}
              size="44"
              onClick={() => toggleListening()}
              //onClick={() => createMessage(conversationId, "Hello World")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
