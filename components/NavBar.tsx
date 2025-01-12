import Link from "next/link";
import AuthBtn from "./AuthBtn";
import NavBarMenu from "./NavBarMenu";

const menuLinks = [
  {
    name: "Conversations",
    href: "/conversations",
  },
];

export default function NavBar() {
  return (
    <nav className="border-b border-secondary">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="flex-1 text-lg font-bold lg:text-xl" href="/">
          TalkToYou<span className="text-primary">AI</span>
        </Link>
        <div className="hidden items-center gap-4 sm:flex">
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
        <div className="hidden flex-1 justify-end sm:flex">
          <AuthBtn />
        </div>
        <NavBarMenu menuLinks={menuLinks} />
      </div>
    </nav>
  );
}
