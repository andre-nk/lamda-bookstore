import firestore from "@/firebase/config";
import { Book } from "@/models/book";
import db from "@/utils/db";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useSearchBook = (term: string | null) => {
  const [result, setResult] = useState<Book[]>([]);

  const getSearchBook = async (term: string) => {
    try {
      const snapshot = await getDocs(
        query(collection(firestore, "books"), where("title", "==", query)),
      );

      const books: Book[] = snapshot.docs.map((doc) => doc.data() as Book);

      setResult(books);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  useEffect(() => {
    if (term) {
      getSearchBook(term);
    }
  }, [term]);

  return { result };
};
