import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { CartProvider } from "./_contexts/CartContext";

import Footer from "./_components/Footer";
import Header from "./_components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hoeflerText = localFont({
  src: [
    {
      path: "../public/fonts/hoefler-text/hoefler-text.ttf",
      weight: "normal",
    },
    {
      path: "../public/fonts/hoefler-text/hoefler-text-italic.ttf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../public/fonts/hoefler-text/hoefler-text-black.ttf",
      weight: "normal",
    },
    {
      path: "../public/fonts/hoefler-text/hoefler-text-black-italic.ttf",
      weight: "normal",
      style: "italic",
    },
  ],
  variable: "--font-hoefler-text",
});

export const metadata: Metadata = {
  title: "Lamda Bookstore",
  description: "WRPL Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${hoeflerText.variable} font-sans`}
        >
          <Header />
          <main>
            <CartProvider>{children}</CartProvider>
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
