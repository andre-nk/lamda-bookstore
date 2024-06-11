"use client";
import { Observable, Subject, debounceTime } from "rxjs";
import { Book } from "@/models/book";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import {
  setCartItems as setCartItemsFirestore,
  getCart,
} from "@/actions/carts";
import { useUser } from "@/hooks/useUser";

/**
 * Borrowed from https://github.com/KMS74/Next.js-Shopping-Cart-App/blob/main/src/CartContext.tsx
 */

export type CartItem = {
  product: Book;
  quantity: number;
};

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Book) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  setCartItems: (items: CartItem[]) => void;
}

export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
  setCartItems: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const user = useUser();
  const [cartItems, _setCartItems] = useState([] as CartItem[]);

  const cartItems$Ref: MutableRefObject<Subject<CartItem[]> | null> =
    useRef(null);

  // This is used to debounce the cart items update,
  // and send the updated cart items to firestore.
  // So we don't update Firestore every time the cart items change.
  useEffect(() => {
    if (!cartItems$Ref.current && user?.id) {
      cartItems$Ref.current = new Subject<CartItem[]>();
      cartItems$Ref.current.pipe(debounceTime(2000)).subscribe((items) => {
        console.log("Updating cart items in Firestore: ", items);
        setCartItemsFirestore(user.id, items).catch((error) => {
          console.error("Error updating cart items in Firestore: ", error);
        });
      });
    }
  }, [user?.id]);

  // Get initial cart items from Firestore
  useEffect(() => {
    if (user?.id) {
      getCart(user.id).then((cart) => {
        if (cart) _setCartItems(cart.items);
      });
    }
  }, [user?.id]);

  /**
   * Set cart items and notify Firestore
   */
  const setCartItems = (items: CartItem[]) => {
    _setCartItems(items);
    cartItems$Ref.current?.next(items);
  };

  const addToCart = (product: Book) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId,
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    if (existingCartItemIndex !== -1) {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
