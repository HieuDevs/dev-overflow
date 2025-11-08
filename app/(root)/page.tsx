import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-2xl font-bold">Welcome to NextJs 16</h1>
    </>
  );
}
