"use client";

import { TMessage } from "@/types/Message";
import { createContext, useState } from "react";

type TMessageContext = {
  messages: TMessage[];
  setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
};

export const MessagesContext = createContext<TMessageContext>({
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
