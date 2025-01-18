import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { getConversationImage } from "@/lib/utils";
import { Badge } from "./ui/badge";

type ConversationCardProps = {
  title: string;
  additionalData?: Array<string>;
};

export default function ConversationCard({
  title,
  additionalData,
}: ConversationCardProps) {
  return (
    <Card className="h-full cursor-pointer">
      <CardHeader>
        <Image
          className="mx-auto rounded-lg"
          src={getConversationImage(title)}
          width={500}
          height={500}
          alt={title}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardContent>
      {additionalData && (
        <CardFooter className="flex justify-center gap-4">
          {additionalData.map((data, index) => (
            <Badge key={index} variant="outline">
              {data}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
