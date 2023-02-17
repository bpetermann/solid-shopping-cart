import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import { ProductType } from '@/types/product.type';
import type { Component } from 'solid-js';

const Template: Component<{
  addProduct: (product: ProductType) => void;
  setShowCart: (show: boolean) => void;
  showCart: boolean;
  cart: ProductType[];
}> = (props) => (
  <main>
    {props.showCart && (
      <Cart setShowCart={props.setShowCart} cart={props.cart} />
    )}
    <Hero />
    <Products addProduct={props.addProduct} />
    <Newsletter />
    <Faqs />
  </main>
);

export default Template;
