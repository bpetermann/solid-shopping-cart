import NewsletterForm from '../Molecules/Newsletter/NewsletterForm';
import styles from './Styles/Newsletter.module.css';
import { Component, createSignal } from 'solid-js';
import { Container } from '@/components/Atoms';

const Newsletter: Component = () => {
  const [email, setEmail] = createSignal<string>('');
  const [interestedIn, setInterestedIn] = createSignal<string>('wfashion');

  const addNewsletter: () => void = () => {
    console.log(email());
    console.log(interestedIn());
  };

  return (
    <Container classname='newsletter'>
      <div class={styles.heading}>
        <h3>JOIN OUR NEWSLETTER!</h3>
        <p>Keep up to date</p>
      </div>
      <NewsletterForm
        email={email()}
        setEmail={setEmail}
        addNewsletter={addNewsletter}
        interestedIn={interestedIn()}
        setInterestedIn={setInterestedIn}
      />
    </Container>
  );
};

export default Newsletter;
