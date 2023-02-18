import { MenuButton, Logo } from '@/components/Atoms';
import styles from './Styles/Navbar.module.css';
import { useCart } from '@/store/cart-context';
import { categories } from '@/lib/categories';
import Container from '../../Atoms/Container';
import { Component, For } from 'solid-js';

const InfoBar: Component<{
  setShowCart: (show: boolean) => void;
  changeCategory: (id: number) => void;
  active: { id: number; name: string };
  showCart: boolean;
}> = (props) => {
  const [_, { cartLength }] = useCart()!;

  const mainCategories = categories.filter((item) => item.id < 3);

  return (
    <Container classname='navbar'>
      <nav class={styles.navbar}>
        <ul class={styles.categories}>
          <For each={mainCategories}>
            {(category) => (
              <li>
                <MenuButton
                  classname={
                    props.active?.name === category.name
                      ? 'desktop-active'
                      : 'desktop'
                  }
                  onClick={() => props.changeCategory(category.id)}
                >
                  {category.name}
                </MenuButton>
              </li>
            )}
          </For>
        </ul>
      </nav>
      <Logo />
      <div class={styles.cart}>
        <button onClick={() => props.setShowCart(!props.showCart)}>
          <img src='/images/cart.png' alt='cart' class={styles.cartImage} />
          <span class={styles.cartAmount}>{cartLength()}</span>
        </button>
      </div>
    </Container>
  );
};

export default InfoBar;
