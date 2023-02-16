import { ParentComponent } from 'solid-js';
import styles from './Styles/Radio.module.css';
import type { JSX } from 'solid-js';

const Radio: ParentComponent<{
  checked: boolean;
  name: string;
  value: string;
  setInput: (value: string) => void;
}> = (props) => {
  const change: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    props.setInput(event.currentTarget.value);
  };

  return (
    <div class={styles.radio}>
      <input
        checked={props.checked}
        type='radio'
        class={styles.input}
        name={props.name}
        value={props.value}
        onChange={change}
      />
      <label for={props.value}>
        <slot /> {props.children}
      </label>
    </div>
  );
};

export default Radio;
