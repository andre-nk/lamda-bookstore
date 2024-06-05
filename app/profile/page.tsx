import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

import React from "react";

export default function ProfilePage() {
  return (
    <div className="my-36 flex w-full px-6 lg:mx-0 lg:my-0 lg:min-h-screen">
      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <Image
          src="/image/login.svg"
          height={200}
          width={200}
          alt="login"
          className="h-7/12 w-7/12"
        />
      </div>
    </div>
  );
}
