"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_contexts/CartContext";

type Props = {
  book: Product;
};

function BookDetail({ book }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="container grid grid-cols-3">
      <div className="relative w-full">
        <Image
          src={"https://placehold.co/400x640.jpg"}
          alt="Book cover placeholder"
          fill
          objectFit="contain"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <h1 className="mb-4 text-5xl capitalize text-slate-900">
          {book?.title}
        </h1>
        <h2 className="mb-4 text-4xl capitalize text-slate-900">
          Rp{book?.price?.toString()}
        </h2>

        <p>Author: {book?.author}</p>
        <p>Rating: {book?.rating?.toString()}</p>
        <p className="font-bold">Deskripsi</p>
        <p className="text-slate-600">{book?.description}</p>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => addToCart(book)}>
            Add to cart
          </Button>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
