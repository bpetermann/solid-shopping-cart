import styles from './Styles/Footer.module.css';
import { Container } from '@/components/Atoms';
import { Component, For } from 'solid-js';

const Footer: Component = () => {
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
            <For each={pageLinks}>{(link) => <li>{link}</li>}</For>
          </ul>
        </nav>
        <nav class={styles.social}>
          Find more inspiration:
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
      </Container>
    </footer>
  );
};

export default Footer;
