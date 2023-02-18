import { createSignal, createContext, useContext } from 'solid-js';
import { ProductType } from '@/types/product.type';
import { ParentComponent } from 'solid-js';
import type { Accessor } from 'solid-js';

export type CartStore = [
  Accessor<ProductType[]>,
  {
    cartLength: () => number;
    totalPrice: () => number;
    addProduct: (product: ProductType) => void;
    removeProduct: (product: ProductType) => void;
  }
];

const CartContext = createContext<CartStore>();

export const CartProvider: ParentComponent<{}> = (props) => {
  const [cart, setCart] = createSignal<ProductType[]>([]);

  const cartStore: CartStore = [
    cart,
    {
      cartLength() {
        return cart().reduce(function (acc, item) {
          return acc + item.amount;
        }, 0);
      },
      totalPrice() {
        return +cart()
          .reduce(function (acc, prod) {
            return acc + prod.amount * prod.price;
          }, 0)
          .toFixed(2);
      },
      addProduct(product: ProductType) {
        const existingCartItemIndex = cart().findIndex(
          (item) => item.name === product.name
        );
        const existingCartItem = cart()[existingCartItemIndex];
        let updatedCart: ProductType[];
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + 1,
          };
          updatedCart = [...cart()];
          updatedCart[existingCartItemIndex] = updatedItem;
          setCart(updatedCart);
        } else {
          setCart([...cart(), product]);
        }
      },
      removeProduct(product: ProductType) {
        const existingCartItemIndex = cart().findIndex(
          (item) => item.name === product.name
        );
        const existingCartItem = cart()[existingCartItemIndex];
        let updatedCart: ProductType[];
        if (existingCartItem.amount > 1) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1,
          };
          updatedCart = [...cart()];
          updatedCart[existingCartItemIndex] = updatedItem;
          setCart(updatedCart);
        } else {
          setCart(cart().filter((item) => item.name !== product.name));
        }
      },
    },
  ];

  return (
    <CartContext.Provider value={cartStore}>
      {props.children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
