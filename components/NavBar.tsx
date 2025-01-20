"use client";

import Link from "next/link";
import AuthBtn from "./AuthBtn";
import NavBarMenu from "./NavBarMenu";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const initialNavBarLinks = [
  {
    name: "Start",
    href: "/conversations/start",
  },
];
const authenticatedNavBarLinks = [
  {
    name: "My Conversations",
    href: "/conversations",
  },
];

export default function NavBar() {
  const [navBarLinks, setNavBarLinks] = useState(initialNavBarLinks);
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setNavBarLinks((prev) => [...prev, ...authenticatedNavBarLinks]);
    }

    return () => {
      setNavBarLinks(initialNavBarLinks);
    };
  }, [status]);

  return (
    <nav className="fixed left-0 top-0 z-[999] h-16 w-full border border-b-neutral-100 bg-background lg:h-24">
      <div className="container mx-auto flex h-full items-center justify-between p-8">
        <Link className="flex-1 text-lg font-bold lg:text-xl" href="/">
          TalkToYou<span className="text-primary">AI</span>
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-4 sm:flex">
          {navBarLinks.map((link) => (
            <Link
              className="font-bold hover:underline"
              key={link.href}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden flex-1 justify-end sm:flex">
          <AuthBtn />
        </div>
        <NavBarMenu menuLinks={navBarLinks} />
      </div>
    </nav>
  );
}
