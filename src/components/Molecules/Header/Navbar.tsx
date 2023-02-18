import Container from '../../Atoms/Container';
import styles from './Styles/Navbar.module.css';
import { Component, For } from 'solid-js';
import { MenuButton, Logo } from '@/components/Atoms';

const InfoBar: Component<{
  categories: { id: number; name: string }[];
  setShowCart: (show: boolean) => void;
  changeCategory: (id: number) => void;
  active: { id: number; name: string };
  cartLength: number;
  showCart: boolean;
}> = (props) => {
  return (
    <Container classname='navbar'>
      <nav class={styles.navbar}>
        <ul class={styles.categories}>
          <For each={props.categories}>
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
          <span class={styles.cartAmount}>{props.cartLength}</span>
        </button>
      </div>
    </Container>
  );
};

export default InfoBar;
