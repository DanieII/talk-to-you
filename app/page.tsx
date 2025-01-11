import Image from "next/image";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-16 text-center text-xl font-bold">
            <h1 className="mx-auto mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-5xl tracking-wide text-transparent lg:w-1/3">
                Talk to AI in real world situations
            </h1>
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
