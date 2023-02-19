import styles from './Styles/AddButton.module.css';
import { Component, createSignal } from 'solid-js';
import { useI18n } from '@solid-primitives/i18n';

const AddButton: Component<{ onClick: () => void }> = (props) => {
  const [style, setStyle] = createSignal<string>('');
  const [t] = useI18n();

  const add = () => {
    setStyle('loading');
    setTimeout(() => {
      setStyle('added');
      setTimeout(() => {
        setStyle('');
        props.onClick();
      }, 500);
    }, 250);
  };
  return (
    <button class={`${styles.add} ${styles[style()]}`} onClick={() => add()}>
      {style() === 'loading' ? (
        <img
          class={styles.spinner}
          src='/images/spinner.gif'
          alt='Loading...'
        />
      ) : (
        <p>{t('Add to Cart')}</p>
      )}
    </button>
  );
};

export default AddButton;
