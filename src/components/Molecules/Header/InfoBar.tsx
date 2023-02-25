import { Container, Close } from '@/components/Atoms';
import { useI18n } from '@solid-primitives/i18n';
import styles from './Styles/InfoBar.module.css';
import { Component } from 'solid-js';

const InfoBar: Component<{ closeInfo: () => void }> = (props) => {
  const [t] = useI18n();

  return (
    <Container classname='infobar'>
      <p class={styles.info}>{t('FREE SHIPPING AND RETURNS')}</p>
      <Close onClick={props.closeInfo} classname='light' />
    </Container>
  );
};

export default InfoBar;
