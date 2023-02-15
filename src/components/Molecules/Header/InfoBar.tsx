import { Container, Close } from '@/components/Atoms';
import styles from './InfoBar.module.css';
import { Component } from 'solid-js';

const InfoBar: Component<{ closeInfo: () => void }> = (props) => {
  return (
    <Container classname='infobar'>
      <p class={styles.info}>FREE SHIPPING AND RETURNS</p>
      <Close onClick={props.closeInfo} />
    </Container>
  );
};

export default InfoBar;
