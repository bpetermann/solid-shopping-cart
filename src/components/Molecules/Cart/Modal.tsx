import type { ParentComponent } from 'solid-js';
import styles from './Styles/Modal.module.css';

const Modal: ParentComponent<{ onClick: () => void }> = (props) => (
  <>
    <div class={styles.backdrop} onClick={props.onClick} />
    <div class={styles.modal}>{props.children}</div>
  </>
);
export default Modal;
