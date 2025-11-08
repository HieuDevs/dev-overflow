import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-2xl font-bold">Welcome to NextJs 16</h1>
      <form
        className="pt-[100px] px-10"
        action={async () => {
          "use server";
          const { signOut } = await import("@/auth");
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
}
