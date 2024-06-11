"use client";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import NoSsr from "../_components/NoSsr";
import { checkout } from "./actions";
import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { useCart } from "@/hooks/useCart";

function Checkout() {
  const user = useUser();
  const { cartItems } = useCart();

  const formRef = React.useRef<HTMLFormElement>(null);

  const router = useRouter();

  if (!user) {
    return <p>You must be logged in to checkout.</p>;
  }

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const redirectUrl = await checkout(user, cartItems);
    router.push(redirectUrl);
  };

  return (
    <NoSsr>
      <form
        className="container mt-16 flex flex-col space-y-8 lg:px-36"
        ref={formRef}
        onSubmit={handleOrder}
      >
        <h1 className="text-2xl font-semibold text-slate-900">Checkout</h1>
        <div className="mt-4 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-row items-start space-x-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.product.cover_img}
                alt="Book cover placeholder"
                className="h-32 w-24 rounded-xl"
              />
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-1">
                  <h2 className="text-xl font-semibold capitalize text-slate-900">
                    {item.product.title}
                  </h2>
                  <span className="text-gray-700">{item.product.author}</span>
                  <span className="font-semibold">
                    Price: Rp{item.product.price}
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <span className="font-semibold">Quantity:</span>
                  <span>{item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p>
          Total: $
          {cartItems.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0,
          )}
        </p>
        <Button type="submit">Pay & Order (DEV)</Button>
      </form>
    </NoSsr>
  );
}

export default Checkout;
