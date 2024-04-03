import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24 flex flex-col justify-around bg-gray-100 py-8 md:flex-row lg:mt-96">
      <div className="flex w-5/6 flex-col justify-between lg:flex-row">
        <div className="flex items-center p-5">
          <p className="font-serif text-2xl font-bold">Lamda Bookshop</p>
        </div>
        <div className="p-5">
          <ul>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">About Us</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Terms & Condition</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">My Account</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Order History</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Newsletter</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Help</Link>
            </li>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <li className="cursor-pointer pb-4 text-base hover:text-blue-600">
              <Link href="#">Follow Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
