"use client";

import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import AuthBtn from "./AuthBtn";
import { Separator } from "./ui/separator";

type NavBarMenuProps = {
  menuLinks: Array<{ href: string; name: string }>;
};

export default function NavBarMenu({ menuLinks }: NavBarMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Menu
        className="cursor-pointer sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <div className="fixed right-0 top-0 z-[999] flex h-full w-[65vw] flex-col bg-background p-4 shadow-xl lg:hidden">
          <XIcon
            className="ml-auto cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className="flex flex-col gap-4 pt-4">
            {menuLinks.map((link) => (
              <Link
                className="font-bold hover:underline"
                key={link.href}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Separator className="my-4" />
          <AuthBtn />
        </div>
      )}
    </div>
  );
}
