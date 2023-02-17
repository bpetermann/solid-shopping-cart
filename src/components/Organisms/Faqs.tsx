import { Container } from '@/components/Atoms';
import { FrequentQuestion } from '@/components/Molecules';
import { Component, For } from 'solid-js';
import styles from './Styles/Faqs.module.css';

const Header: Component = () => {
  const questions: { icon: string; question: string; answer: string }[] = [
    {
      icon: 'mark',
      question: 'Help & Contact',
      answer:
        'When you complete your order, we will show you in what timeframe your package is expected to arrive',
    },
    {
      icon: 'gift',
      question: 'Gift cards',
      answer:
        'You can redeem your promotional voucher in the last step of the order process. Enter the voucher code in the "Vouchers and discount codes" field.',
    },
    {
      icon: 'shipping',
      question: 'Shipping',
      answer:
        'If you are shipping internationally, there are several delivery speed options available during the checkout process, usually standard, express and priority delivery.',
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
