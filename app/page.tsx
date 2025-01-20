"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="container relative mx-auto p-8 text-xl font-bold">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 text-center">
          <h1 className="text-3xl !leading-snug lg:text-5xl">
            Practice{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              speaking
            </span>{" "}
            with AI in{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              real-world situations
            </span>
          </h1>
          <p className="max-w-sm font-normal">
            Simulate job interviews and conversations in public, get feedback
            and more...
          </p>
          <Link href="/conversations/start">
            <Button size="lg">Start Speaking</Button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto p-8">
          <Image
            src="/talk-to-you.webp"
            width={500}
            height={500}
            alt="logo"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
