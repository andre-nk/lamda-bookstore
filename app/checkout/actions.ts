"use server";
import { CartItem } from "../_contexts/CartContext";
// @ts-ignore
import midtransClient from "midtrans-client";

/**
 * Checkout and get redirect URL to Midtrans payment page.
 */
export async function checkout(
  customerId: number,
  items: CartItem[],
): Promise<string> {
  // TODO: Save order to database and get id. For now, the id is the current timestamp.
  const orderId = Date.now().toString();

  const snap: any = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const transaction = await snap.createTransaction({
    transaction_details: {
      order_id: orderId,
      gross_amount: items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: "Lam",
      last_name: "Da",
    },
  });

  return transaction.redirect_url;
}
