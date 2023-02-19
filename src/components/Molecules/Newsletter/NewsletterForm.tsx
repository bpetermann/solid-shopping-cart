import { Input, BaseButton, Radio } from '@/components/Atoms';
import styles from './Styles/Newsletter.module.css';
import { useI18n } from '@solid-primitives/i18n';
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
  const [t] = useI18n();

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
        marker={t('Your Email')}
      />
      <p>{t('I am mostly interested in')}</p>
      <For each={interestedOptions}>
        {(option) => (
          <Radio
            checked={props.interestedIn === option.value}
            name={option.name}
            value={option.value}
            setInput={props.setInterestedIn}
          >
            {t(`${option.text}`)}
          </Radio>
        )}
      </For>
      <BaseButton>
        <img src='/images/mail.png' alt='Mail icon' class={styles.icon} />
        <p> {t(`Add my Email`)}</p>
      </BaseButton>
      <p class={styles.info}>{t('Unsubscribe')}</p>
    </form>
  );
};

export default NewsletterForm;
