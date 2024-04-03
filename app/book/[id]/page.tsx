import db from "@/utils/db";
import BookDetail from "./BookDetail";

async function getBook(id: string) {
  const book = await db.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!book) return null;

  const output = {
    ...book,
    id: Number(book.id),
    price: book.price!.toNumber(),
    rating: book.rating?.toNumber(),
  };
  return output;
}

async function Book({ params }: any) {
  const book = await getBook(params.id);

  if (!book) return <div>Book not found</div>;
  return <BookDetail book={book} />;
}

export default Book;
