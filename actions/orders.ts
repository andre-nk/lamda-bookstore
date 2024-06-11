import { CartItem } from "@/app/_contexts/CartContext";
import { Order, OrderLine } from "@/models/order";

import firestore from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { AuthUser } from "@/models/auth-user";

export const saveOrder = async (
  orderId: string,
  customer: AuthUser,
  items: CartItem[],
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
  };

  try {
    await addDoc(collection(firestore, "orders"), order);
  } catch (error: any) {
    return {
      error: error?.message || "Failed to save order",
    };
  }
};
