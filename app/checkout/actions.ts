"use server";
import db from "@/utils/db";
import { CartItem } from "../_contexts/CartContext";

export async function checkout(
  items: CartItem[],
  customerId: number,
  paymentMethod: string,
) {
  console.log("Checking out items", items, customerId, paymentMethod);
  await db.$transaction(async (db) => {
    const orderTransaction = await db.transaction.create({
      data: {
        customer_id: customerId.toString(),
        payment_method: paymentMethod,
        created_at: new Date(),
        status: "pending",
        total_price: items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0,
        ),
      },
    });

    // TODO: Handle quantities of items
    for (const item of items) {
      for (let i = 0; i < item.quantity; i++) {
        await db.transaction_product.create({
          data: {
            product_id: item.product.id,
            transaction_id: Number(orderTransaction.id),
          },
        });
      }
    }
  });
}
