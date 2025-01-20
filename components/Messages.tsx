"use client";

import { TMessage } from "@/types/Message";
import { useContext, useEffect, useRef } from "react";
import Message from "./Message";
import { MessagesContext } from "@/contexts/MessagesContext";

type MessagesProps = {
  initialMessages: TMessage[];
};

export default function Messages({ initialMessages }: MessagesProps) {
  const { messages, setMessages } = useContext(MessagesContext);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-8">
      {messages.map((message, index) => (
        <Message key={index} role={message.role} content={message.content} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
