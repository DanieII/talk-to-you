import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignInBtn() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
