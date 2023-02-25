import styles from './Styles/Logo.module.css';
import solidLogo from '../../logo.svg';
import { Component } from 'solid-js';

const Logo: Component = () => (
  <div class={styles.logo}>
    <div>
      <img src={solidLogo} class={styles['logo-solid']} alt='Solid Logo' />
    </div>
    <h3> shopping cart </h3>
  </div>
);

export default Logo;
