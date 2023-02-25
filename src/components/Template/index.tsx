import {
  Hero,
  Products,
  Newsletter,
  Faqs,
  Cart,
  Favorites,
} from '@/components/Organisms';
import { Component, createEffect } from 'solid-js';

const Template: Component<{
  category: { id: number; name: string };
  setShowCart: (show: boolean) => void;
  setShowFavorites: (show: boolean) => void;
  showFavorites: boolean;
  showCart: boolean;
  value: string;
}> = (props) => {
  return (
    <main>
      {props.showCart && <Cart setShowCart={props.setShowCart} />}
      {props.showFavorites && (
        <Favorites setShowFavorites={props.setShowFavorites} />
      )}
      <Hero />
      <Products category={props.category} value={props.value} />
      <Newsletter />
      <Faqs />
    </main>
  );
};

export default Template;
