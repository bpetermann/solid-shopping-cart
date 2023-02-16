import solidLogo from '../../logo.svg';
import styles from './Styles/Logo.module.css';
import { Component } from 'solid-js';

const Logo: Component = () => (
<section class={styles.logo}>
  <div>
    <img src={solidLogo} class="logo solid" alt="Solid Logo" />
  </div>
  <a href="/"> shopping cart </a>
</section>
);

export default Logo;
