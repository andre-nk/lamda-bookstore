"use client";

import React, { useState } from "react";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { useApp } from "../_contexts/AppContext";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { sidebarVisible, setSidebarVisible } = useApp();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="p-4 dark:text-gray-800">
      <div className="container mx-auto flex h-16 justify-between px-12 py-2">
        <p className="font-serif text-[26px]">Lamda Bookshop</p>
        <div className="">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="menu dropdown-content bg-base-100 rounded-box absolute z-[1] w-36 p-2 shadow">
                <li>
                  <a className="text-sm">Best Sellers</a>
                </li>
                <li>
                  <a className="text-sm">Best Fictions</a>
                </li>
                <li>
                  <a className="text-sm">Best Non-Fictions</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, author..."
            className="block h-[36px] w-[560px] rounded-3xl border border-gray-300 bg-gray-50 pl-4 pr-10 text-[12px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex translate-y-[-15%] items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-500"
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
        <div className="flex cursor-pointer flex-row truncate rounded px-4">
          <div></div>
          <button
            className="ml-2 flex w-full flex-row-reverse"
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
                className="feather feather-shopping-cart mt-2 h-6 w-6"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
          </button>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
