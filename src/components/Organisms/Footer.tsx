import { Container, LanguageSelect } from '@/components/Atoms';
import { useI18n } from '@solid-primitives/i18n';
import styles from './Styles/Footer.module.css';
import { Component, For } from 'solid-js';

const Footer: Component = () => {
  const [t] = useI18n();

  const pageLinks: string[] = [
    'About',
    'Imprint',
    'Terms & Conditions',
    'Data settings',
  ];
  const socialMediaLinks: string[] = [
    'facebook',
    'spotify',
    'instagram',
    'youtube',
    'twitter',
  ];

  return (
    <footer>
      <Container classname='footer'>
        <nav class={styles.links}>
          <ul>
            <For each={pageLinks}>{(link) => <li>{t(`${link}`)}</li>}</For>
          </ul>
        </nav>
        <nav class={styles.social}>
          {t('Find more inspiration:')}
          <ul>
            <For each={socialMediaLinks}>
              {(social) => (
                <li>
                  <img src={`/images/${social}.png`} alt={`${social} icon`} />
                </li>
              )}
            </For>
          </ul>
        </nav>
        <div class={styles.lang}>
          <LanguageSelect />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
