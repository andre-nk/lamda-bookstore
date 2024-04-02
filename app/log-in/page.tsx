import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-1/2 items-center justify-center">
        <Image
          src="/image/login.svg"
          height={200}
          width={200}
          alt="login"
          className="h-7/12 w-7/12"
        />
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-black text-sm normal-case",
            },
          }}
        />
      </div>
    </div>
  );
}
