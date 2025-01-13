import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ConversationCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ConversationCard({
  title,
  description,
  image,
}: ConversationCardProps) {
  return (
    <Card className="lg:basis-[30%]">
      <CardHeader>
        <Image src={image} width={500} height={500} alt={title} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
