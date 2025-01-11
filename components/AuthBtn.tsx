import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

export default async function AuthBtn() {
    const session = await auth();
    const isUserAuthenticated = session?.user;

    if (!isUserAuthenticated) {
        return (
            <form
                action={async () => {
                    "use server";
                    await signIn();
                }}
            >
                <Button>Sign in</Button>
            </form>
        );
    } else {
        return (
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <Button>Sign out</Button>
            </form>
        );
    }
}
