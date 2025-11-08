"use client";

import { SignInSchema } from "@/lib/validations";

import AuthForm from "@/components/forms/AuthForm";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={async (data) => {
        return {
          success: true,
          error: undefined,
        };
      }}
    />
  );
};
export default SignIn;
