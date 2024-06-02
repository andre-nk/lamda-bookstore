export type Book = {
  id: string;
  title: string;
  author: string;
  rating: number;
  description: string;
  language: string;
  isbn: string;
  genres: string[];
  characters: string[];
  pages: number;
  published_at: Date;
  cover_img: string;
  price: number;
  stock: number;
};
