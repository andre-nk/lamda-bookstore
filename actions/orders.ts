import { CartItem } from "@/app/_contexts/CartContext";
import { Order, OrderLine, SnapTransaction } from "@/models/order";

import firestore from "@/firebase/config";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { AuthUser } from "@/models/auth-user";
import { docToJson } from "@/utils";

export const getOrdersByCustomerId = async (customerId: string) => {
  try {
    const docsSnapshot = await getDocs(
      query(
        collection(firestore, "orders"),
        where("customer_id", "==", customerId),
        orderBy("created_at", "desc"),
      ),
    );

    if (docsSnapshot.docs.length > 0) {
      const orders: Order[] = docsSnapshot.docs.map(
        (doc) => doc.data() as Order,
      );

      return docToJson(orders);
    }
  } catch (error: any) {
    throw error;
  }
};

export const saveOrder = async (
  orderId: string,
  customer: AuthUser,
  items: CartItem[],
  snapTransaction: SnapTransaction,
  shipping: string,
) => {
  const orderLines: OrderLine[] = items.map((item) => ({
    product_id: item.product.id,
    quantity: item.quantity,
    title: item.product.title,
    cover_img: item.product.cover_img,
    price: item.product.price,
    isbn: item.product.isbn,
  }));

  const totalCost = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const order: Order = {
    id: orderId,
    customer_id: customer.id,
    order_lines: orderLines,
    total_cost: totalCost,
    created_at: new Date(),
    midtrans_link: snapTransaction.redirect_url,
    midtrans_token: snapTransaction.token,
    shipping: shipping,
  };

  try {
    await addDoc(collection(firestore, "orders"), order);
  } catch (error: any) {
    return {
      error: error?.message || "Failed to save order",
    };
  }
};
