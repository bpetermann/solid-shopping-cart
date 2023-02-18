import NewsletterForm from '../Molecules/Newsletter/NewsletterForm';
import styles from './Styles/Newsletter.module.css';
import { Component, createSignal } from 'solid-js';
import { validEmail } from '@/helpers/validation';
import { Toast } from '@/components/Molecules';
import { Container } from '@/components/Atoms';

const Newsletter: Component = () => {
  const [email, setEmail] = createSignal<string>('');
  const [interestedIn, setInterestedIn] = createSignal<string>('wfashion');
  const [showToast, setShowToast] = createSignal<boolean>(false);

  const success = () => validEmail(email());

  const addNewsletter: () => void = () => {
    setShowToast(true);
  };

  const close: () => void = () => {
    setShowToast(false);
    setInterestedIn('wfashion');
    setEmail('');
  };

  return (
    <>
      <Container classname='newsletter'>
        <div class={styles.heading}>
          <h3>JOIN OUR NEWSLETTER!</h3>
          <p>Keep up to date</p>
        </div>
        <NewsletterForm
          setInterestedIn={setInterestedIn}
          addNewsletter={addNewsletter}
          interestedIn={interestedIn()}
          setEmail={setEmail}
          email={email()}
        />
      </Container>
      {showToast() && (
        <Toast close={close} success={success()} time={4000}>
          {success() ? 'Email was added' : 'Invalid input'}
        </Toast>
      )}
    </>
  );
};

export default Newsletter;
