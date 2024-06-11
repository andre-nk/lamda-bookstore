"use server";

import firestore from "@/firebase/config";
import { Cart } from "@/models/cart";
import { docToJson as docToJs } from "@/utils";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const createCart = async (user_id: string) => {
  // If user already has a cart, return the cart
  const cartQuery = query(
    collection(firestore, "carts"),
    where("user_id", "==", user_id),
  );
  const cartQuerySnapshot = await getDocs(cartQuery);

  if (cartQuerySnapshot.docs.length > 0) {
    const cart = cartQuerySnapshot.docs[0].data() as Cart;
    return cart;
  }

  // Create a new cart
  const cartObject: Cart = {
    user_id,
    items: [],
    created_at: new Date(),
  };

  const newCart = await addDoc(collection(firestore, "carts"), cartObject);
  return docToJs(newCart);
};

export const setCartItems = async (user_id: string, items: any) => {
  const cartQuery = query(
    collection(firestore, "carts"),
    where("user_id", "==", user_id),
  );
  const cartQuerySnapshot = await getDocs(cartQuery);

  if (cartQuerySnapshot.docs.length === 0) await createCart(user_id);

  if (cartQuerySnapshot.docs.length > 0) {
    await updateDoc(cartQuerySnapshot.docs[0].ref, {
      items,
    });
  }

  return items;
};

export const getCart = async (user_id: string) => {
  const cartQuery = query(
    collection(firestore, "carts"),
    where("user_id", "==", user_id),
  );
  const cartQuerySnapshot = await getDocs(cartQuery);

  if (cartQuerySnapshot.docs.length > 0) {
    const cart = docToJs(cartQuerySnapshot.docs[0].data()) as Cart;
    return cart;
  }

  return null;
};
