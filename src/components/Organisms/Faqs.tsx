import { FrequentQuestion } from '@/components/Molecules';
import { Container } from '@/components/Atoms';
import styles from './Styles/Faqs.module.css';
import { Component, For } from 'solid-js';

const Header: Component = () => {
  const questions: { icon: string; question: string; answer: string }[] = [
    {
      icon: 'mark',
      question: 'Help & Contact question',
      answer: 'Help & Contact answer',
    },
    {
      icon: 'gift',
      question: 'Gift cards question',
      answer: 'Gift cards answer',
    },
    {
      icon: 'shipping',
      question: 'Shipping question',
      answer: 'Shipping answer',
    },
  ];

  return (
    <Container classname='faqs'>
      <ul class={styles.list}>
        <For each={questions}>
          {(faq) => (
            <FrequentQuestion
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
            />
          )}
        </For>
      </ul>
    </Container>
  );
};

export default Header;
