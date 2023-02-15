import styles from './Input.module.css';
import { Component } from 'solid-js';
import type { JSX } from 'solid-js';

const Input: Component<{
  value: string;
  setSearchTerm: (value: string) => void;
}> = ({ value, setSearchTerm }) => {
  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <input
      type='text'
      placeholder='Search'
      class={styles.search}
      value={value}
      onInput={onInput}
    />
  );
};

export default Input;
