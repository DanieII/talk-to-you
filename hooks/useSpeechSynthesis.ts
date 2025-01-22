"use client";

import { useState } from "react";

export const useSpeechSynthesis = () => {
  const synth = window.speechSynthesis;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);

  const speak = (text: string) => {
    if (!text || synth.speaking) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);

    utterance.rate = rate;

    synth.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
  };

  return { speak, isSpeaking, stopSpeaking, rate, setRate };
};
