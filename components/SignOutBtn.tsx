import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        // Avoid page reload
        const data = await signOut({ redirect: false, callbackUrl: "/" });
        router.push(data.url);
      }}
    >
      Sign out
    </Button>
  );
}
