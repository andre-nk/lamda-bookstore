import { CartContext } from "@/app/_contexts/CartContext";
import { useContext } from "react";

export const useCart = () => {
  return useContext(CartContext);
};
