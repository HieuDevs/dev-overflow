"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";
import LOGIN_PLATFORM, { LoginPlatformType } from "@/constants/login_platform";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark-200_light800 rounded-2 flex-1 min-h-12 px-4 py-3.5";
  const handlSignIn = async (provider: LoginPlatformType) => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "An error occurred while signing in");
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handlSignIn(LOGIN_PLATFORM.GITHUB)}>
        <Image
          src="/icons/github.svg"
          alt="GitHub logo"
          width={20}
          height={20}
          className="invert-colors object-contain mr-2.5"
        />
        <p>Continue with GitHub</p>
      </Button>
      <Button className={buttonClass} onClick={() => handlSignIn(LOGIN_PLATFORM.GOOGLE)}>
        <Image src="/icons/google.svg" alt="Google logo" width={20} height={20} className="object-contain mr-2.5" />
        <p>Continue with Google</p>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
