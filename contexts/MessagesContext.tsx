"use client";

import { TMessage } from "@/types/Message";
import { createContext, useState } from "react";

type MessageContext = {
  messages: TMessage[];
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
};

export const MessagesContext = createContext<MessageContext>({
  messages: [],
  setMessages: () => {},
});

type MessagesProviderProps = {
  children?: React.ReactNode;
};

export const MessagesProvider = ({ children }: MessagesProviderProps) => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};
