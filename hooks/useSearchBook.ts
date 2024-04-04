import db from "@/utils/db";
import { product } from "@prisma/client";
import { useEffect, useState } from "react";

export const useSearchBook = (query: string | null) => {
  const [result, setResult] = useState<product[]>([]);

  const getSearchBook = async (query: string) => {
    const result = await db.product.findMany({
      where: {
        OR: [
          {
            title: {
              equals: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    setResult(result);
  };

  useEffect(() => {
    if (query) {
      getSearchBook(query);
    }
  }, [query]);

  return { result };
};
