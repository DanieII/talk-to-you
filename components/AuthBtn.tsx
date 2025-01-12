"use client";

import { useSession } from "next-auth/react";
import SignOutBtn from "./SignOutBtn";
import SignInBtn from "./SignInBtn";

export default function AuthBtn() {
  const { status } = useSession();

  return status === "authenticated" ? <SignOutBtn /> : <SignInBtn />;
}
