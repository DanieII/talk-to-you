import Image from "next/image";

export default function Home() {
  return (
    <div className="container relative mx-auto px-4 py-4 text-xl font-bold lg:py-8">
      <div className="mx-auto mb-4 flex max-w-screen-md flex-col items-center gap-2 text-center">
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
        <p className="max-w-sm font-normal">
          Simulate job interviews and conversations in public, get feedback and
          more...
        </p>
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
