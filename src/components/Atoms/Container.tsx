import { ParentComponent } from 'solid-js';
import styles from './Styles/Container.module.css';

const Template: ParentComponent<{ classname?: string }> = (props) => (
  <section class={`${styles.container} ${styles[props.classname ?? '']}`}>
    <div>{props.children}</div>
  </section>
);

export default Template;
