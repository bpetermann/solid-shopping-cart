import styles from './Styles/FrequentQuestion.module.css';
import { Component, createSignal } from 'solid-js';
import { useI18n } from '@solid-primitives/i18n';

const FrequentQuestion: Component<{
  icon: string;
  question: string;
  answer: string;
}> = (props) => {
  const [open, setOpen] = createSignal(false);
  const [t] = useI18n();

  return (
    <li class={`${styles.faq} ${open() && styles.isOpen}`}>
      <div>
        <div class={styles.question}>
          <img src={`/images/${props.icon}.png`} alt={`${props.icon} icon`} />
          <p>{t(`${props.question}`)}</p>
        </div>
        <button class={styles.open} onClick={() => setOpen((prev) => !prev)}>
          <img src='/images/expand.png' alt='Arrow icon' />
        </button>
      </div>
      {open() && (
        <div class={styles.answer}>
          <p>{t(`${props.answer}`)}</p>
        </div>
      )}
    </li>
  );
};

export default FrequentQuestion;
