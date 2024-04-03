import React from "react";


import { ClerkProvider, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="p-4 dark:text-gray-800">
      <div className="container flex px-12 py-2 justify-between h-16 mx-auto">
        <p className="text-[26px] font-serif">Lamda Bookshop</p>
        <div className="">
          <div className="dropdown px-1 relative">
            <button
              type="button"
              className="text-sm text-[16px] px-1 py-2.5 inline-flex"
              data-dropdown-toggle="dropdown"
            >
              Categories
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, author..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-[12px] rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[560px] h-[36px] pl-4 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 translate-y-[-15%]">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row cursor-pointer truncate px-4 rounded">
          <div></div>
          <div className="flex flex-row-reverse ml-2 w-full">
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
                className="feather feather-shopping-cart w-6 h-6 mt-2"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
