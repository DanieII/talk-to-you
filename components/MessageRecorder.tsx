"use client";

import { MessagesContext } from "@/contexts/MessagesContext";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { createMessage, generateResponse } from "@/lib/conversations";
import { Mic, Loader, Trash2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import styles from "@/styles/rotate.module.css";
import SpeechOptions from "./SpeechOptions";
import { SpeechSynthesis } from "@/contexts/SpeechSynthesisContext";

type MessageRecorderProps = {
  scenario: string;
  conversationId: string;
};

export default function MessageRecorder({
  scenario,
  conversationId,
}: MessageRecorderProps) {
  const { setMessages } = useContext(MessagesContext);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [error, setError] = useState("");
  const {
    isListening,
    transcript,
    transcriptError,
    toggleListening,
    abortListening,
  } = useSpeechRecognition();
  const { speak, setRate } = useContext(SpeechSynthesis);

  const addUserMessage = async (conversationId: string, content: string) => {
    const [newMessage] = await createMessage(conversationId, "user", content);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addAIResponse = async (conversationId: string) => {
    try {
      const content = await generateResponse(scenario, conversationId);
      const [newMessage] = await createMessage(
        conversationId,
        "assistant",
        content,
      );
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      speak(content);
    } catch (error) {
      setError("An error occurred while generating the AI response.");
    }
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
  }, [transcript]);

  return (
    <div className="container mx-auto h-full p-8">
      <div className="relative flex h-full items-center justify-center">
        <div className="flex-1">
          <SpeechOptions setRate={setRate} />
        </div>
        <div className="flex-1">
          {isWaitingForResponse ? (
            <Loader
              className={`${styles.rotate} -translate-x-1/2 text-primary`}
              size="44"
            />
          ) : (
            <Mic
              className={`-translate-x-1/2 cursor-pointer ${isListening ? "text-destructive" : "text-primary"}`}
              size="44"
              onClick={() => toggleListening()}
            />
          )}
          {isListening && (
            <Trash2
              className="absolute right-[65%] top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer text-primary hover:text-destructive lg:right-[55%]"
              onClick={() => abortListening()}
            />
          )}
        </div>
      </div>
      {(transcriptError || error) && (
        <p className="text-center text-destructive">
          {transcriptError || error}
        </p>
      )}
    </div>
  );
}
