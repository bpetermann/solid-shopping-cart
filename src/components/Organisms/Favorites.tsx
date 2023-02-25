import { useFavorites } from '@/store/favorite-context';
import { Modal, Product } from '@/components/Molecules';
import styles from './Styles/Favorites.module.css';
import { useI18n } from '@solid-primitives/i18n';

import { Close } from '@/components/Atoms';
import { Component, For } from 'solid-js';

const Favorites: Component<{
  setShowFavorites: (show: boolean) => void;
}> = (props) => {
  const [favorites] = useFavorites()!;
  const [t] = useI18n();

  return (
    <Modal onClick={() => props.setShowFavorites(false)} classname='favorites'>
      <div class={styles.favorites}>
        <div class={styles.close}>
          <Close
            onClick={() => props.setShowFavorites(false)}
            classname='dark'
          />
        </div>
        <h3>{t('Favorites')}</h3>
        <ul class={styles.favoritesList}>
          <For each={favorites()}>
            {(product) => (
              <li>
                <Product product={product} />
              </li>
            )}
          </For>
        </ul>
        <div />
      </div>
    </Modal>
  );
};

export default Favorites;
