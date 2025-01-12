import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignInBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
