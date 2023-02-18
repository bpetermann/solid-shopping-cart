import { Hero, Products, Newsletter, Faqs, Cart } from '@/components/Organisms';
import type { Component } from 'solid-js';

const Template: Component<{
  category: { id: number; name: string };
  setShowCart: (show: boolean) => void;
  showCart: boolean;
  value: string;
}> = (props) => (
  <main>
    {props.showCart && <Cart setShowCart={props.setShowCart} />}
    <Hero />
    <Products category={props.category} value={props.value} />
    <Newsletter />
    <Faqs />
  </main>
);

export default Template;
