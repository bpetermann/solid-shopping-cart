import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import { ProductType } from '@/types/product.type';
import type { Component } from 'solid-js';

const Template: Component<{
  removeProduct: (product: ProductType) => void;
  addProduct: (product: ProductType) => void;
  category: { id: number; name: string };
  setShowCart: (show: boolean) => void;
  cart: ProductType[];
  showCart: boolean;
  value: string;
}> = (props) => (
  <main>
    {props.showCart && (
      <Cart
        removeProduct={props.removeProduct}
        setShowCart={props.setShowCart}
        addProduct={props.addProduct}
        cart={props.cart}
      />
    )}
    <Hero />
    <Products
      addProduct={props.addProduct}
      category={props.category}
      value={props.value}
    />
    <Newsletter />
    <Faqs />
  </main>
);

export default Template;
