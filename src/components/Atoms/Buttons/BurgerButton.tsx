import styles from './Styles/BurgerButton.module.css';
import { Component } from 'solid-js';

const Close: Component<{ onClick: () => void }> = (props) => (
  <button class={styles.burger} onClick={props.onClick} aria-label="toggle-navigation">
    <span />
    <span />
    <span />
  </button>
);

export default Close;
