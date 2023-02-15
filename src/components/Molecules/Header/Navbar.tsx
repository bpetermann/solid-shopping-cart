import Container from '../../Atoms/Container';
import styles from './Navbar.module.css';
import { Component } from 'solid-js';
import Logo from '../../Atoms/Logo';

const InfoBar: Component = () => {
  return (
    <Container classname='navbar'>
      <nav class={styles.navbar}>
        <button>Shoes</button>
        <button>Bags</button>
      </nav>
      <Logo />
      <div class={styles.cart}>
        <button>
          <img src='/images/cart.png' alt='cart' class={styles.cartImage} />
          <span class={styles.cartAmount}>0</span>
        </button>
      </div>
    </Container>
  );
};

export default InfoBar;
