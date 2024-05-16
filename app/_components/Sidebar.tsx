"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "../_contexts/AppContext";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCart } from "../_contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const { sidebarVisible, setSidebarVisible } = useApp();
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart();

  return (
    <Drawer
      open={sidebarVisible}
      onOpenChange={setSidebarVisible}
      direction="right"
      modal={false}
      dismissible={false}
    >
      <DrawerPortal>
        <DrawerContent className="w-full drop-shadow-2xl md:w-7/12 lg:w-4/12">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <DrawerTitle className="text-xl font-semibold text-slate-900 lg:text-2xl">
              My Cart
            </DrawerTitle>
            <Button onClick={() => setSidebarVisible(false)} variant="ghost">
              Close
            </Button>
          </DrawerHeader>
          <div className="flex flex-col gap-2 px-4">
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-row items-start space-x-8"
                >
                  <Image
                    src={item.product.cover_img}
                    alt="Book cover placeholder"
                    className="aspect-[3/4] w-[45%] rounded-xl md:w-[40%] lg:w-[35%]"
                    width={120}
                    height={160}
                  />
                  <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-1">
                      <h2 className="text-xl font-semibold capitalize text-slate-900">
                        {item.product.title}
                      </h2>
                      <span className="text-gray-700">
                        {item.product.author}
                      </span>
                      <span className="font-semibold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.product.price * item.quantity ?? 0)}
                      </span>
                      <span>Qty: {item.quantity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button
                          variant="secondary"
                          onClick={() =>
                            updateCartItemQuantity(
                              item.product.id,
                              item.quantity - 1,
                            )
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() =>
                            updateCartItemQuantity(
                              item.product.id,
                              item.quantity + 1,
                            )
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DrawerFooter className="flex flex-col space-y-1">
            <span className="text-xl">
              <p className="text-sm">Total:</p>
              <p className="font-lg font-semibold">
                {" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(
                  cartItems.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0,
                  ) ?? 0,
                )}
              </p>
            </span>
            <Button className="h-[5.5vh] w-full" asChild>
              <Link href="/checkout">Checkout</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default Sidebar;
