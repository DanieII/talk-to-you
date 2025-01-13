"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative mx-auto p-4 text-xl font-bold">
      <div className="mx-auto flex max-w-screen-md flex-col items-center py-8 text-center">
        <h1 className="text-3xl !leading-snug lg:text-5xl">
          Practice{" "}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            speaking
          </span>{" "}
          with AI in{" "}
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            real-world scenarios
          </span>
        </h1>
        <p className="max-w-sm py-4 font-normal">
          Simulate job interviews and conversations in public, get feedback and
          more...
        </p>
        <Link href="/conversations">
          <Button size="lg">Start Speaking</Button>
        </Link>
      </div>
      <Image
        src="/talk-to-you.webp"
        width={500}
        height={500}
        alt="logo"
        className="mx-auto"
      />
    </div>
  );
}
