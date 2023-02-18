import styles from './Styles/BaseButton.module.css';
import { ParentComponent } from 'solid-js';

const BaseButton: ParentComponent<{ onClick?: () => void }> = (props) => (
  <button class={styles.base} onClick={props?.onClick}>
    {props.children}
  </button>
);

export default BaseButton;
