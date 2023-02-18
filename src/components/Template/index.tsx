import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import { ProductType } from '@/types/product.type';
import type { Component } from 'solid-js';

const Template: Component<{
  removeProduct: (product: ProductType) => void;
  addProduct: (product: ProductType) => void;
  setShowCart: (show: boolean) => void;
  showCart: boolean;
  value: string;
  cart: ProductType[];
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
    <Products addProduct={props.addProduct} value={props.value} />
    <Newsletter />
    <Faqs />
  </main>
);

export default Template;
