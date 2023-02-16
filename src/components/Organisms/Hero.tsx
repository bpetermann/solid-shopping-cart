import { Container } from '@/components/Atoms';
import styles from './Styles/Hero.module.css';
import { Component } from 'solid-js';

const Hero: Component = () => (
  <Container classname='hero'>
    <div class={styles.info}>
      <h1>DROP WINTER 2022</h1>
      <p>The 3 Pairs of Shoes You Need for this Winter</p>
      <button class={styles.button}>
        <p>Shop now</p>
        <img src='/images/arrow.png' alt='Arrow right' />
      </button>
    </div>
    <div class={styles.image}>
      <img src='/images/model.png' alt='Model' />
    </div>
  </Container>
);

export default Hero;
