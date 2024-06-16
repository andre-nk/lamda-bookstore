"use server";
import { AuthUser } from "@/models/auth-user";
import { CartItem } from "../_contexts/CartContext";
// @ts-ignore
import midtransClient from "midtrans-client";
import { saveOrder } from "@/actions/orders";
import { emptyCart } from "@/actions/carts";
import { updateBooksQuantities } from "@/actions/products";

/**
 * Checkout and get redirect URL to Midtrans payment page.
 */
export async function checkout(
  customer: AuthUser,
  items: CartItem[],
): Promise<string> {
  const orderId = Date.now().toString();

  const snap: any = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const total = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const transaction = await snap.createTransaction({
    transaction_details: {
      order_id: orderId,
      gross_amount: total,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      id: customer.id,
      first_name: customer.firstName,
      last_name: customer.lastName,
      email: customer.email,
    },
  });

  await updateBooksQuantities(
    items.map((item) => item.product.id),
    items.map((item) => -item.quantity),
  );

  await emptyCart(customer.id);

  await saveOrder(orderId, customer, items, transaction);

  return transaction.redirect_url;
}
