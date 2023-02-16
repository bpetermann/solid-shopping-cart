import { Input, BaseButton, Radio } from '@/components/Atoms';
import styles from './Styles/Newsletter.module.css';
import { Component, For } from 'solid-js';

const NewsletterForm: Component<{
  email: string;
  interestedIn: string;
  setEmail: (value: string) => void;
  setInterestedIn: (value: string) => void;
  addNewsletter: () => void;
}> = (props) => {
  const interestedOptions: { value: string; text: string; name: string }[] = [
    { value: 'wfashion', text: "Women's Fashion", name: 'interest' },
    { value: 'mfashion', text: "Men's Fashion", name: 'interest' },
  ];

  return (
    <form
      class={styles.form}
      onSubmit={(e: Event) => {
        e.preventDefault();
        props.addNewsletter();
      }}
    >
      <Input
        setInput={props.setEmail}
        classname={'primary'}
        value={props.email}
        marker={'Your Email'}
      />
      <p>I am mostly interested in</p>
      <For each={interestedOptions}>
        {(option) => (
          <Radio
            checked={props.interestedIn === option.value}
            name={option.name}
            value={option.value}
            setInput={props.setInterestedIn}
          >
            {option.text}
          </Radio>
        )}
      </For>
      <BaseButton>
        <img src='/images/mail.png' alt='Mail icon' class={styles.icon} />
        <p>Add my Email</p>
      </BaseButton>
      <p class={styles.info}>
        You can unsubscribe at any time free of charge. Just a demo, no emails
        are stored
      </p>
    </form>
  );
};

export default NewsletterForm;
