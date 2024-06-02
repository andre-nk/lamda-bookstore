import { getSearchBook } from "@/actions/actions";
import BookCard from "@/app/_components/BookCard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default async function SearchPage({ search }: { search: string }) {
  let result = await getSearchBook(search);

  if ("error" in result!) {
    throw new Error(result.error);
  }

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
              <BreadcrumbLink href="/">Search</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/search/${search}`}>
                {`"${search}"`}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-3xl font-semibold">
          {`Search results for "${search}" (found ${result.length} books)`}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-10">
        {result.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
