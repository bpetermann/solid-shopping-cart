import styles from './Styles/Close.module.css';
import { Component } from 'solid-js';

const Close: Component<{ onClick: () => void; classname?: string }> = (
  props
) => (
  <button
    class={`${styles.close} ${props.classname && styles[props.classname]}`}
    onClick={props.onClick}
  >
    <img src='/images/close.png' alt='close' />
  </button>
);

export default Close;
