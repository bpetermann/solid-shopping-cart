import styles from './Styles/Close.module.css';
import { Component } from 'solid-js';

const Close: Component<{ onClick: () => void }> = (props) => (
  <button class={styles.close} onClick={props.onClick}>
    <img src='/images/close.png' alt='close' />
  </button>
);

export default Close;
