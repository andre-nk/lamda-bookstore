import React from "react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between">
      <p className="font-sans">Lamda Bookstore</p>
      <UserButton />
    </header>
  );
};

export default Header;
