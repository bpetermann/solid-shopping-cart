import { ParentComponent } from 'solid-js';
import styles from "./Atoms.module.css";

const Template: ParentComponent <{classname: string}> = (props) => (
  <section class={styles[props.classname]}>
    <div>{props.children}</div>
  </section>
);

export default Template;
