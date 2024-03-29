import { useI18n } from '@solid-primitives/i18n';
import { Container } from '@/components/Atoms';
import styles from './Styles/Hero.module.css';
import { Component } from 'solid-js';

const Hero: Component = () => {
  const [t] = useI18n();

  return (
    <Container classname='hero'>
      <div class={styles.info}>
        <h1>DROP WINTER 2022</h1>
        <p>{t('The 3 Pairs of Shoes You Need for this Winter')}</p>
        <button class={styles.button}>
          <p>{t('Shop now')}</p>
          <img src='/images/arrow.png' alt='Arrow right' />
        </button>
      </div>
      <div class={styles.image}>
        <img src='/images/model.webp' alt='Model' />
      </div>
    </Container>
  );
};

export default Hero;
