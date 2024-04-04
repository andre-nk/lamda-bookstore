"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useApp } from "../_contexts/AppContext";

const Header = () => {
  const { sidebarVisible, setSidebarVisible } = useApp();
  return (
    <header className="flex w-full items-center justify-between">
      <p className="font-sans">Lamda Bookstore</p>
      <div className="flex-grow"></div>
      <Button onClick={() => setSidebarVisible(!sidebarVisible)}>Cart</Button>
      <UserButton />
    </header>
  );
};

export default Header;
