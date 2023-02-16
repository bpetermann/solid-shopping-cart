import styles from './Styles/Input.module.css';
import { Component } from 'solid-js';
import type { JSX } from 'solid-js';

const Input: Component<{
  value: string;
  marker: string;
  classname?: string;
  setInput: (value: string) => void;
}> = ({ value, setInput, marker, classname }) => {
  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setInput(event.currentTarget.value);
  };

  return (
    <input
      type='text'
      placeholder={marker ?? 'Search'}
      class={`${styles.input} ${styles[classname ?? '']}`}
      value={value}
      onInput={onInput}
    />
  );
};

export default Input;
