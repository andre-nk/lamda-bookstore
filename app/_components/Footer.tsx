import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 mt-96 h-64 flex md:flex-row flex-col justify-around">
            <div className="max-h-36 w-5/6 flex justify-between">
                <div className="p-5 flex items-center">
                    <ul>
                        <p className="font-bold text-2xl font-serif">
                            Lamda Bookshop
                        </p>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#' >About Us</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>Terms & Condition</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#' >My Account</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>Order History</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>Newsletter</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#' >Contact Us</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>Help</Link>
                        </li>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#'>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <li className="pb-4 hover:text-blue-600 cursor-pointer text-base">
                            <Link href='#' >Follow Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>     
    );
};

export default Footer;
