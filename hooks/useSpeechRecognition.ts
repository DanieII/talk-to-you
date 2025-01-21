import { useEffect, useRef, useState } from "react";

export const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const getTranscript = (event: SpeechRecognitionEvent) => {
    let transcript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const currentTranscript = event.results[i][0].transcript;
      transcript += ` ${currentTranscript}`;
    }

    return transcript.trim();
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.lang = "en-US";

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = getTranscript(event);
        console.log(transcript);

        if (!transcript) {
          setError("Could not recognize speech. Please try again.");
        } else {
          setError("");
          setTranscript((prev) => prev + transcript);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) =>
        setError(event.error);

      recognitionRef.current = recognition;
    } else {
      setError("Speech recognition is not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
      setTranscript("");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    toggleListening,
  };
};
