import styles from './Styles/MenuButton.module.css';
import { ParentComponent } from 'solid-js';

const Close: ParentComponent<{ onClick: () => void; classname?: string }> = (
  props
) => (
  <button
    class={`${styles.menu} ${styles[props.classname ?? '']}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Close;
