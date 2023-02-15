import { Component } from 'solid-js';
import styles from './InfoBar.module.css';
import Container from '../Atoms/Container';
import Close from '../Atoms/Buttons/Close';

const InfoBar: Component<{ closeInfo: () => void }> = (props) => {
  return (
    <Container classname='infobar'>
      <p class={styles.info}>FREE SHIPPING AND RETURNS</p>
      <Close onClick={props.closeInfo} />
    </Container>
  );
};

export default InfoBar;
