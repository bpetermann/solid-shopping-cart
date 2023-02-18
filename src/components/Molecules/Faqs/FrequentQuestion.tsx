import styles from './Styles/FrequentQuestion.module.css';
import { Component, createSignal } from 'solid-js';

const FrequentQuestion: Component<{
  icon: string;
  question: string;
  answer: string;
}> = (props) => {
  const [open, setOpen] = createSignal(false);

  return (
    <li class={`${styles.faq} ${open() && styles.isOpen}`}>
      <div>
        <div class={styles.question}>
          <img src={`/images/${props.icon}.png`} alt={`${props.icon} icon`} />
          <p>{props.question}</p>
        </div>
        <button class={styles.open} onClick={() => setOpen((prev) => !prev)}>
          <img src='/images/expand.png' alt='Arrow icon' />
        </button>
      </div>
      <div class={styles.answer}>
        <p>{props.answer}</p>
      </div>
    </li>
  );
};

export default FrequentQuestion;
