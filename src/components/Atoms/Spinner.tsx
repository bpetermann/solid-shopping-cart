import styles from './Styles/Spinner.module.css';
import { Component } from 'solid-js';

const Spinner: Component = () => (
<span> <img class={styles.spinner} src="/images/spinner.gif" alt="Loading..." /></span>
);

export default Spinner;
