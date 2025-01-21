"use client";

import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { createContext } from "react";

type SpeechSynthesis = {
  speak: (text: string) => void;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
};

export const SpeechSynthesis = createContext<SpeechSynthesis>({
  speak: () => {},
  rate: 1,
  setRate: () => {},
});

type SpeechSynthesisProviderProps = {
  children?: React.ReactNode;
};

export const SpeechSynthesisProvider = ({
  children,
}: SpeechSynthesisProviderProps) => {
  const { speak, rate, setRate } = useSpeechSynthesis();

  return (
    <SpeechSynthesis.Provider value={{ speak, rate, setRate }}>
      {children}
    </SpeechSynthesis.Provider>
  );
};
