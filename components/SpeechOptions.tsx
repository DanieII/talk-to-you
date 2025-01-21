"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SpeechOptionsProps = {
  setRate: React.Dispatch<React.SetStateAction<number>>;
};

export default function SpeechOptions({ setRate }: SpeechOptionsProps) {
  const rates = ["0.5", "1", "1.5", "2"];

  return (
    <Select
      onValueChange={(value: string) => {
        setRate(parseFloat(value));
      }}
    >
      <SelectTrigger className="w-[80px] lg:w-[180px]">
        <SelectValue placeholder="Voice speed" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {rates.map((rate) => (
            <SelectItem key={rate} value={rate}>
              {rate}x
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
