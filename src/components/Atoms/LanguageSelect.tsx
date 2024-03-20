import styles from './Styles/LanguageSelect.module.css';
import { useI18n } from '@solid-primitives/i18n';
import { Component, For, createSignal, JSX } from 'solid-js';

const Input: Component<{}> = () => {
  const [lang, setLang] = createSignal<string>('en');
  const [t, { locale }] = useI18n();

  const languages: { id: number; text: string }[] = [
    { id: 1, text: 'en' },
    { id: 2, text: 'de' },
  ];

  const changeLanguage: JSX.EventHandler<HTMLSelectElement, Event> = (
    event
  ) => {
    setLang(event.currentTarget.value);
    locale(lang());
  };

  return (
    <select
      value={lang()}
      onChange={changeLanguage}
      class={styles['lang-select']}
      aria-label='Language select'
    >
      <For each={languages}>
        {(language) => (
          <option value={language.text} selected={locale() === language.text}>
            {t(`${language.text}`)}
          </option>
        )}
      </For>
    </select>
  );
};

export default Input;
