"use client";

import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { createContext } from "react";

type SpeechSynthesis = {
  speak: (text: string) => void;
  isSpeaking: boolean;
  stopSpeaking: () => void;
  rate: number;
  setRate: React.Dispatch<React.SetStateAction<number>>;
};

export const SpeechSynthesis = createContext<SpeechSynthesis>({
  speak: () => {},
  isSpeaking: false,
  stopSpeaking: () => {},
  rate: 1,
  setRate: () => {},
});

type SpeechSynthesisProviderProps = {
  children?: React.ReactNode;
};

export const SpeechSynthesisProvider = ({
  children,
}: SpeechSynthesisProviderProps) => {
  const { speak, isSpeaking, stopSpeaking, rate, setRate } =
    useSpeechSynthesis();

  return (
    <SpeechSynthesis.Provider
      value={{ speak, isSpeaking, stopSpeaking, rate, setRate }}
    >
      {children}
    </SpeechSynthesis.Provider>
  );
};
