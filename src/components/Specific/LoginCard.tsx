"use client";

import { signIn } from "next-auth/react";
import Button from "../General/Button";
import { FaGoogle } from "react-icons/fa";

const LoginCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center flex-1">
      <h1 className="text-2xl font-bold mb-4 max-w-60 text-center">
        Login to access more features
      </h1>

      <Button onClick={() => signIn("google", { callbackUrl: "/users" })}>
        <div className="flex items-center gap-2">
          <FaGoogle />
          Log in with Google
        </div>
      </Button>
    </div>
  );
};

export default LoginCard;
