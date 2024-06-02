import db from "@/utils/db";
import BookDetail from "./BookDetail";
import { getBookByID } from "@/actions/actions";

async function Book({ params }: any) {
  const book = await getBookByID(params.id);

  if ("error" in book) {
    throw new Error(book.error);
  }

  if (!book) return <div>Book not found</div>;
  return <BookDetail book={book} />;
}

export default Book;
