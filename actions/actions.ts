"use server";

import firestore from "@/firebase/config";
import { Book } from "@/models/book";
import { cleanArr } from "@/utils/clean_arr";
import { sampleBook } from "@/utils/seed_data";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const seedProductData = async () => {
  try {
    sampleBook.forEach((book) => {
      const bookObject: Book = {
        id: book.id.toString(),
        title: book.title,
        author: book.author,
        rating: parseFloat(book.rating),
        description: book.description,
        language: book.language,
        isbn: book.isbn,
        genres: cleanArr(book.genres),
        characters: cleanArr(book.characters),
        pages: book.pages,
        published_at: new Date(book.published_at),
        cover_img: book.cover_img,
        price: parseInt(book.price),
        stock: 1000,
      };

      addDoc(collection(firestore, "books"), bookObject);
    });
  } catch (error) {}
};

export const getBestSellerBooks = async (take: number) => {
  try {
    const docsSnapshot = await getDocs(
      query(
        collection(firestore, "books"),
        orderBy("price", "asc"),
        limit(take),
      ),
    );

    if (docsSnapshot.docs.length > 0) {
      const books: Book[] = docsSnapshot.docs.map((doc) => doc.data() as Book);

      return books;
    } else {
      throw new Error("No books found");
    }
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const getBooksByCategory = async (take: number, category: string) => {
  try {
    const docsSnapshot = await getDocs(
      query(
        collection(firestore, "books"),
        where("genres", "array-contains", category),
        limit(take),
      ),
    );

    if (docsSnapshot.docs.length > 0) {
      const books: Book[] = docsSnapshot.docs.map((doc) => doc.data() as Book);

      return books;
    } else {
      throw new Error(`No books found for ${category}`);
    }
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const getBookByID = async (id: string) => {
  try {
    const docSnapshot = await getDocs(
      query(collection(firestore, "books"), where("id", "==", id)),
    );

    if (docSnapshot.docs.length > 0) {
      const book: Book = docSnapshot.docs[0].data() as Book;

      return book;
    } else {
      throw new Error("Book not found");
    }
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const getSearchBook = async (term: string) => {
  try {
    if (term === "") {
      throw new Error("Search term cannot be empty");
    }

    const snapshot = await getDocs(
      query(collection(firestore, "books"), where("title", "==", term)),
    );

    const books: Book[] = snapshot.docs.map((doc) => doc.data() as Book);

    return books;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
