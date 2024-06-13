"use client";

import React, { useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useApp } from "../_contexts/AppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [searchQuery, setsearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { sidebarVisible, setSidebarVisible } = useApp();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="dark:text-gray-800">
      <div className="my-6 flex h-16 items-center justify-between px-6 lg:container lg:px-12">
        <Link href="/" className="font-serif text-xl">
          Lamda Bookshop
        </Link>
        <div className="flex space-x-4 lg:w-[50%]">
          <SignedIn>
            <div className="hidden lg:block">
              <div className="dropdown relative px-1">
                <button
                  type="button"
                  className="inline-flex px-1 py-2.5 text-[16px] text-sm"
                  data-dropdown-toggle="dropdown"
                  onClick={toggleDropdown}
                >
                  Categories
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="menu dropdown-content bg-base-100 rounded-box absolute z-50 flex w-36 flex-col space-y-4 bg-white p-2 shadow">
                    <Link href="/categories/Best-Sellers" className="text-sm">
                      Best Sellers
                    </Link>
                    <Link href="/categories/Fiction" className="text-sm">
                      Best Fiction
                    </Link>
                    <Link href="/categories/Romance" className="text-sm">
                      Best Romance
                    </Link>
                  </ul>
                )}
              </div>
            </div>
          </SignedIn>
          <SignedIn>
            <div className="relative hidden w-full md:block">
              <input
                type="text"
                placeholder="Search by title, author..."
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    router.push(`/search?q=${searchQuery}`);
                  }
                }}
                className="block h-[36px] w-full rounded-3xl border border-gray-300 bg-gray-50 pl-4 pr-10 text-[12px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="absolute right-2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </SignedIn>
        </div>
        <SignedIn>
          <div className="hidden lg:block">
            <Link href="/profile">
              <button className="inline-flex px-1 py-2.5 text-[16px] text-sm">
                Address
              </button>
            </Link>
            <Link href="/orders">
              <button className="inline-flex px-1 py-2.5 text-[16px] text-sm">
                Orders
              </button>
            </Link>
          </div>
        </SignedIn>
        <SignedIn>
          <div className="flex items-center justify-end space-x-4">
            <div className="flex cursor-pointer flex-row truncate rounded px-4">
              <button
                className="flex w-full flex-row-reverse"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <div slot="icon" className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart h-6 w-6"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
              </button>
            </div>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
