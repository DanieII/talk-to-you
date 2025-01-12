import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import { auth } from "@/auth";

export default async function AuthBtn() {
  const session = await auth();
  console.log(session);

  return session ? <SignOutBtn /> : <SignInBtn />;
}
