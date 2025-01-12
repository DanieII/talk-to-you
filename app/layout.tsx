import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
