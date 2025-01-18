"use client";

import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { createMessage } from "@/lib/conversations";
import { Mic } from "lucide-react";
import { useEffect } from "react";

type MessageRecorderProps = {
  conversationId: string;
};

export default function MessageRecorder({
  conversationId,
}: MessageRecorderProps) {
  const { isListening, transcript, error, toggleListening } =
    useSpeechRecognition();

  useEffect(() => {
    if (!isListening) {
      if (transcript.trim()) createMessage(conversationId, transcript);
    }
  }, [transcript]);

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
            />
          </div>
        )}
      </div>
    </div>
  );
}
