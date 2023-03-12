import { MenuButton, Logo, LanguageSelect } from '@/components/Atoms';
import { useFavorites } from '@/store/favorite-context';
import { useI18n } from '@solid-primitives/i18n';
import styles from './Styles/Navbar.module.css';
import { useCart } from '@/store/cart-context';
import { categories } from '@/lib/categories';
import Container from '../../Atoms/Container';
import { Component, For } from 'solid-js';

const InfoBar: Component<{
  setShowFavorites: (show: boolean) => void;
  setShowCart: (show: boolean) => void;
  changeCategory: (id: number) => void;
  active: { id: number; name: string };
  showCart: boolean;
}> = (props) => {
  const [, { cartLength }] = useCart()!;
  const [, { favoritesLength }] = useFavorites()!;
  const [t] = useI18n();

  const mainCategories = categories.filter((item) => item.id < 3);

  return (
    <Container classname='navbar'>
      <nav class={styles.navbar}>
        <For each={mainCategories}>
          {(category) => (
            <MenuButton
              classname={
                props.active?.name === category.name
                  ? 'desktop-active'
                  : 'desktop'
              }
              onClick={() => props.changeCategory(category.id)}
            >
              {t(`${category.name}`)}
            </MenuButton>
          )}
        </For>
        <LanguageSelect />
      </nav>
      <Logo />
      <div class={styles.container}>
        <button
          onClick={() => props.setShowFavorites(true)}
          disabled={favoritesLength() === 0}
        >
          <img
            src='/images/favorite.png'
            alt='favorite'
            class={styles.favoritesImage}
          />
          {favoritesLength() > 0 && (
            <span class={styles.favoritesAmount}>{favoritesLength()}</span>
          )}
        </button>
        <button onClick={() => props.setShowCart(!props.showCart)}>
          <img src='/images/cart.png' alt='cart' class={styles.cartImage} />
          {cartLength() > 0 && (
            <span class={styles.cartAmount}>{cartLength()}</span>
          )}
        </button>
      </div>
    </Container>
  );
};

export default InfoBar;
