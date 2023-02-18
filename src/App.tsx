import { Header, Footer } from '@/components/Organisms';
import { Component, createSignal } from 'solid-js';
import { ProductType } from './types/product.type';
import Template from './components/Template';

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

  const categories: { id: number; name: string }[] = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Bags' },
    { id: 3, name: 'Women' },
    { id: 4, name: 'Men' },
    { id: 5, name: 'Sport' },
  ];

  const [category, setCategory] = createSignal<{ id: number; name: string }>(
    categories[0]
  );

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        setShowCart={setShowCart}
        cartLength={cartLength()}
        categories={categories}
        category={category()}
        showCart={showCart()}
        value={searchTerm()}
      />
      <Template
        removeProduct={removeProduct}
        setShowCart={setShowCart}
        addProduct={addProduct}
        showCart={showCart()}
        category={category()}
        value={searchTerm()}
        cart={cart()}
      />
      <Footer />
    </>
  );
};
export default App;
