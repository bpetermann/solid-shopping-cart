import styles from './Styles/Cart.module.css';
import type { ParentComponent } from 'solid-js';

const Modal: ParentComponent<{ onClick: () => void }> = (props) => (
  <>
    <div class={styles.backdrop} onClick={props.onClick} />
    <div class={styles.modal}>{props.children}</div>
  </>
);
export default Modal;
