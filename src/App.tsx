import { Header, Footer } from '@/components/Organisms';
import { Component, createEffect, createSignal } from 'solid-js';
import Template from './components/Template';
import { ProductType } from './types/product.type';

const App: Component = () => {
  const [cart, setCart] = createSignal<ProductType[]>([]);
  const [showCart, setShowCart] = createSignal<boolean>(false);
  const [searchTerm, setSearchTerm] = createSignal<string>('');

  const cartLength = () =>
    cart().reduce(function (acc, item) {
      return acc + item.amount;
    }, 0);

  const addProduct = (product: ProductType) => {
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
  };

  const removeProduct = (product: ProductType) => {
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
  };

  createEffect(() => {
    console.log(searchTerm());
  });

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setShowCart={setShowCart}
        cartLength={cartLength()}
        showCart={showCart()}
        value={searchTerm()}
      />
      <Template
        removeProduct={removeProduct}
        setShowCart={setShowCart}
        addProduct={addProduct}
        showCart={showCart()}
        value={searchTerm()}
        cart={cart()}
      />
      <Footer />
    </>
  );
};
export default App;
