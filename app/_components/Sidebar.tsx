"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "../_contexts/AppContext";
import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useCart } from "../_contexts/CartContext";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const { sidebarVisible, setSidebarVisible } = useApp();
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart();
  console.log(cartItems);

  return (
    <Drawer
      open={sidebarVisible}
      onOpenChange={setSidebarVisible}
      direction="right"
      modal={false}
      dismissible={false}
    >
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="flex flex-row">
            <DrawerTitle className="flex-grow text-3xl font-semibold capitalize text-slate-900 lg:text-4xl">
              My Cart
            </DrawerTitle>
            <Button onClick={() => setSidebarVisible(false)} variant="ghost">
              Close
            </Button>
          </DrawerHeader>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex flex-row gap-2">
                  <Image
                    src={item.product.cover_img}
                    alt="Book cover placeholder"
                    className="rounded-xl"
                    width={120}
                    height={160}
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold capitalize text-slate-900">
                      {item.product.title}
                    </h2>
                    <span className="font-semibold text-gray-700">
                      {item.product.author}
                    </span>
                    <span className="font-semibold text-red-500">
                      Rp{item.product.price}
                    </span>
                    <span>Kuantitas: {item.quantity}</span>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          updateCartItemQuantity(
                            item.product.id,
                            item.quantity - 1,
                          )
                        }
                      >
                        -
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
                        +
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-xl">
                Total: Rp
                {cartItems.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0,
                )}
              </p>
              <Button className="w-full">Checkout</Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerDescription>{"Don't forget to checkout!"}</DrawerDescription>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export default Sidebar;
