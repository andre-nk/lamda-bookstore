import React from "react";

import BookCard from "@/app/_components/BookCard";
import db from "@/utils/db";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  let books;
  const category = params.category;

  if (category === "Best-Sellers") {
    books = await db.product.findMany({
      orderBy: {
        price: "asc",
      },
      take: 30,
    });
  } else {
    books = await db.product.findMany({
      where: {
        genres: {
          contains: category,
        },
      },
    });
  }

  console.log(books);

  return (
    <div className="flex flex-col space-y-8 p-8">
      <div className="flex flex-col space-y-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Category</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/categories/${category}`}>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl font-semibold">
          {category === "Best-Sellers" ? "Best Sellers" : `Best ${category}`}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
