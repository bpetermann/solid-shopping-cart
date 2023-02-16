import { Component } from 'solid-js';
import styles from './Styles/Close.module.css';

const Close: Component<{ onClick: () => void }> = (props) => (
  <button class={styles.close} onClick={props.onClick}>
    <img src='/images/close.png' alt='close' />
  </button>
);

export default Close;
