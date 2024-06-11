import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import BookCard from "./BookCard";
import { getBestSellerBooks, getBooksByCategory } from "@/actions/products";

export default async function BookSwipers({
  categoryTitle,
  category,
}: {
  categoryTitle: string;
  category: string;
}) {
  let books;

  if (categoryTitle === "Best Sellers") {
    books = await getBestSellerBooks(10);
  } else {
    books = await getBooksByCategory(10, category);
  }

  if ("error" in books) {
    console.log(category);
    throw new Error(books.error);
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-2xl font-semibold lg:text-3xl">{categoryTitle}</h3>
        <Link
          href={
            category !== ""
              ? `/categories/${category}`
              : `/categories/Best-Sellers`
          }
          className="text-blue-500"
        >
          see all
        </Link>
      </div>
      <Carousel className="mx-10 max-h-[40vh] md:max-h-[28vh] lg:mx-10 lg:max-h-[32vh] xl:max-h-[44vh]">
        <CarouselContent>
          {books.map((book) => (
            <CarouselItem
              key={book.id}
              className="basis-1/2 pr-4 md:basis-1/3 lg:basis-1/6"
            >
              <BookCard book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mb-[12vh]">
          <CarouselPrevious />
        </div>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
