import { ParentComponent } from 'solid-js';
import styles from './Styles/BaseButton.module.css';

const BaseButton: ParentComponent<{ onClick?: () => void }> = (props) => (
  <button class={styles.base} onClick={props?.onClick}>
    {props.children}
  </button>
);

export default BaseButton;
