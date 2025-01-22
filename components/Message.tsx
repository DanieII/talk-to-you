"use client";

import { SpeechSynthesis } from "@/contexts/SpeechSynthesisContext";
import { AudioLines, Copy, Pause } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MessageProps = {
  role: string;
  content: string;
};

export default function Message({ role, content }: MessageProps) {
  const { speak, isSpeaking, stopSpeaking } = useContext(SpeechSynthesis);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (isListening && !isSpeaking) {
      setIsListening(false);
    }
  }, [isSpeaking]);

  const handleListen = () => {
    if (!isSpeaking) {
      speak(content);
      setIsListening(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div
      className={`rounded-xl p-4 text-xl ${role === "user" ? "ml-auto bg-secondary text-secondary-foreground" : "mr-auto bg-primary text-primary-foreground"}`}
    >
      <p>{content}</p>
      {role === "assistant" && (
        <div className="mt-4 flex items-center justify-end gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {isListening ? (
                  <Pause onClick={() => stopSpeaking()} />
                ) : (
                  <AudioLines
                    className="ml-auto cursor-pointer hover:opacity-50"
                    onClick={() => handleListen()}
                  />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>Listen</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Copy
                  className="cursor-pointer hover:opacity-50"
                  onClick={copyToClipboard}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
}
