import { getStoreArray, updateStore, removeStore } from '@/helpers/storage';
import { createSignal, createContext, useContext } from 'solid-js';
import { ProductType } from '@/types/product.type';
import { ParentComponent } from 'solid-js';
import type { Accessor } from 'solid-js';

export type CartStore = [
  Accessor<ProductType[]>,
  {
    cartLength: () => number;
    totalPrice: () => number;
    storedCart: (products: ProductType[]) => void;
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
      storedCart(products: ProductType[]) {
        const cartStorage = getStoreArray('cart');
        if (!cartStorage.length) {
          setCart([]);
        }
        const initialCartItems = cartStorage.map((item) => {
          const index = products.findIndex(
            (product) => product.id === item.split(':')[0]
          );
          if (index !== -1) {
            return {
              ...products[index],
              amount: parseInt(item.split(':')[1]),
            };
          }
        });

        setCart(initialCartItems as ProductType[]);
      },
      addProduct(product: ProductType) {
        const cartStorage = getStoreArray('cart');
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
          const storage = cartStorage.filter(
            (item) => !item.includes(product.id)
          );
          updateStore('cart', storage, `${product.id}:${updatedItem.amount}`);
          setCart(updatedCart);
        } else {
          updateStore('cart', cartStorage, `${product.id}:1`);
          setCart([...cart(), product]);
        }
      },
      removeProduct(product: ProductType) {
        const cartStorage = getStoreArray('cart');
        const storage = cartStorage.filter(
          (item) => !item.includes(product.id)
        );
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
          updateStore('cart', storage, `${product.id}:${updatedItem.amount}`);
          setCart(updatedCart);
        } else {
          storage.length ? updateStore('cart', storage) : removeStore('cart');
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
