import styles from './Styles/Input.module.css';
import { Component } from 'solid-js';
import type { JSX } from 'solid-js';

const Input: Component<{
  value: string;
  marker: string;
  classname?: string;
  setInput: (value: string) => void;
}> = (props) => {
  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    props.setInput(event.currentTarget.value);
  };

  return (
    <input
      type='text'
      placeholder={props.marker ?? 'Search'}
      class={`${styles.input} ${styles[props.classname ?? '']}`}
      value={props.value}
      onInput={onInput}
    />
  );
};

export default Input;
