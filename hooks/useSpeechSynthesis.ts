"use client";

import { useState } from "react";

export const useSpeechSynthesis = () => {
  const synth = window.speechSynthesis;
  const [rate, setRate] = useState(1);

  const speak = (text: string) => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = rate;

    synth.speak(utterance);
  };

  return { speak, rate, setRate };
};
