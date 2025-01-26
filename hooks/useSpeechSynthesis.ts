"use client";

import { useEffect, useRef, useState } from "react";

export const useSpeechSynthesis = () => {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    if (!synthRef.current) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (synthRef.current) {
        stopSpeaking();
      }
    };
  }, [isSpeaking]);

  const speak = (text: string) => {
    const synth = synthRef.current;
    if (!synth || synth.speaking || !text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);

    utterance.rate = rate;

    synth.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    const synth = synthRef.current;

    if (synth && isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
  };

  return { speak, isSpeaking, stopSpeaking, rate, setRate };
};
