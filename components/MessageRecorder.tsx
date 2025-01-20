"use client";

import { MessagesContext } from "@/contexts/MessagesContext";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { createMessage, generateResponse } from "@/lib/conversations";
import { Mic, Loader } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import styles from "@/styles/rotate.module.css";

type MessageRecorderProps = {
  conversationId: string;
};

export default function MessageRecorder({
  conversationId,
}: MessageRecorderProps) {
  const { messages, setMessages } = useContext(MessagesContext);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const { isListening, transcript, error, toggleListening } =
    useSpeechRecognition();

  const addUserMessage = async (conversationId: string, content: string) => {
    const [newMessage] = await createMessage(conversationId, "user", content);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addAIResponse = async (conversationId: string) => {
    const content = await generateResponse(conversationId);
    const [newMessage] = await createMessage(
      conversationId,
      "assistant",
      content,
    );
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addUserMessageAndAIResponse = async (
    conversationId: string,
    content: string,
  ) => {
    await addUserMessage(conversationId, content);
    setIsWaitingForResponse(true);
    await addAIResponse(conversationId);
    setIsWaitingForResponse(false);
  };

  useEffect(() => {
    if (!isListening) {
      const userMessage = transcript.trim();
      if (userMessage) {
        addUserMessageAndAIResponse(conversationId, userMessage);
      }
    }

    return () => {
      if (isListening) {
        toggleListening();
      }
    };
  }, [transcript]);

  return (
    <div className="h-full">
      <div className="flex h-full items-center justify-center">
        {error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <div className="text-primary">
            {isWaitingForResponse ? (
              <Loader className={styles.rotate} size="44" />
            ) : (
              <Mic
                className={`cursor-pointer ${isListening && "text-destructive"}`}
                size="44"
                onClick={() => toggleListening()}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
