import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/models/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <Image
        src={book.cover_img}
        alt={book.title}
        height={300}
        width={200}
        className="aspect-[2/3] w-full overflow-clip rounded-lg"
      />
      <p className="pt-2.5 text-lg font-medium">{book.title}</p>
      <p className="pt-0.5 text-sm text-gray-400">
        {book.author.split(", ")[0] + " et.al."}
      </p>
      <p className="pt-2 font-semibold">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(book.price)}
      </p>
    </Link>
  );
}
