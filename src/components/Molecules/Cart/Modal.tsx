import type { ParentComponent } from 'solid-js';
import styles from './Styles/Modal.module.css';

const Modal: ParentComponent<{ onClick: () => void; classname?: string }> = (
  props
) => (
  <>
    <div class={styles.backdrop} onClick={props.onClick} />
    <div
      class={`${styles.modal} ${props.classname && styles[props.classname]}`}
    >
      {props.children}
    </div>
  </>
);
export default Modal;
