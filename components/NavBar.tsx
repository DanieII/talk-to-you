import Link from "next/link";
import AuthBtn from "./AuthBtn";

export default function NavBar() {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <Link className="text-lg font-bold lg:text-xl" href="/">
          TalkToYou<span className="text-primary">AI</span>
        </Link>
        <AuthBtn />
      </div>
    </nav>
  );
}
