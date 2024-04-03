"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_contexts/CartContext";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {
  book: Product;
};

function BookDetail({ book }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="container mt-16 flex flex-col space-y-8 lg:px-36">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Books</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/book/${book.id}`}>
              {book.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col items-center space-y-16 lg:flex-row lg:items-start lg:space-x-24 lg:space-y-0">
        <div className="relative aspect-[2/3] w-full md:w-[40%] lg:min-h-[50vh]">
          <Image
            src={book.cover_img}
            alt="Book cover placeholder"
            fill
            objectFit="cover"
            className="overflow-clip rounded-xl"
          />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-gray-400">{book.author.split(", ")[0]}</p>
              <h1 className="text-3xl font-semibold capitalize text-slate-900 lg:text-4xl">
                {book?.title}
              </h1>
            </div>
            <div className="h-[1px] w-full bg-black opacity-50"></div>
            <h2 className="text-[1.25rem] font-medium capitalize text-slate-900 lg:text-2xl">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(book.price ?? 0)}
            </h2>
          </div>

          <div className="flex flex-col space-y-1">
            <p>Author: {book?.author}</p>
            <p>Rating: {book?.rating?.toString()}</p>
          </div>

          <div className="flex flex-col space-y-1">
            <p className="font-bold">Deskripsi</p>
            <p className="text-slate-600">{book?.description}</p>
          </div>

          <div className="flex space-x-5">
            <Button
              className="w-full lg:w-auto"
              variant="outline"
              onClick={() => addToCart(book)}
            >
              Add to cart
            </Button>
            <Button className="w-full lg:w-auto">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
