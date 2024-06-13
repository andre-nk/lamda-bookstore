"use client";
import { getOrdersByCustomerId } from "@/actions/orders";
import { useUser } from "@/hooks/useUser";
import { Order } from "@/models/order";
import React, { useEffect } from "react";

export default function OrdersPage() {
  const user = useUser();
  const [orders, setOrders] = React.useState<Order[]>([]);

  useEffect(() => {
    if (!user?.id) return;
    getOrdersByCustomerId(user.id).then(
      (orders) => orders && setOrders(orders),
    );
  }, [user?.id]);

  if (!user) return <div>not logged in</div>;

  return (
    <section>
      {orders.map((order) => (
        <div key={order.id} className="mb-4 border p-4">
          <h1 className="text-xl font-bold">Order ID: {order.id}</h1>
          <h2 className="text-lg">
            Order Date: {order.created_at.toDateString()}
          </h2>
          <h3 className="text-lg">Order Total: {order.total_cost}</h3>
          <ul className="mt-2">
            {order.order_lines.map((item) => (
              <li key={item.product_id} className="mt-2">
                <h4 className="text-md font-semibold">
                  Book ID: {item.product_id}
                </h4>
                <h5 className="text-md">Quantity: {item.quantity}</h5>
                <h6 className="text-md">Price: {item.price}</h6>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            <a href={order.midtrans_link}>Midtrans Link</a>
          </p>
          <p className="mt-2">
            Status code: {order.midtrans?.status_code || "Unpaid"}
          </p>
          <p className="mt-2">
            Status message: {order.midtrans?.status_message || "Unpaid"}
          </p>
        </div>
      ))}
    </section>
  );
}
