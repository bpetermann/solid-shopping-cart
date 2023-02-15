import { Component } from 'solid-js';
import styles from './Buttons.module.css';

const Close: Component<{ onClick: () => void }> = (props) => (
  <button class={styles.burger} onClick={props.onClick}>
    <span />
    <span />
    <span />
  </button>
);

export default Close;
