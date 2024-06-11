import { Book } from "./book";

export type CartItem = {
  product: Book;
  quantity: number;
};

/**
 * Cart model for Firestore
 */
export type Cart = {
  user_id: string;
  items: CartItem[];
  created_at: Date;
};
