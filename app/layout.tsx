import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talk To You",
  description: "Practice your English speaking skills with Talk To You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${openSans.className} flex min-h-screen flex-col antialiased`}
        >
          <NavBar />
          <main className="mt-16 lg:mt-24">{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
