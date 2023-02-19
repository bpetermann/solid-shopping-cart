import styles from './Styles/NavbarMobile.module.css';
import { useI18n } from '@solid-primitives/i18n';
import { MenuButton } from '@/components/Atoms';
import { categories } from '@/lib/categories';
import { Component, For } from 'solid-js';

const NavbarMobile: Component<{
  changeCategory: (id: number) => void;
  active: { id: number; name: string } | undefined;
}> = (props) => {
  const [t] = useI18n();

  return (
    <nav class={styles.navbar}>
      <ul class={styles.categories}>
        <For each={categories}>
          {(category) => (
            <li>
              <MenuButton
                classname={
                  props.active?.name === category.name
                    ? 'mobile-active'
                    : 'mobile'
                }
                onClick={() => props.changeCategory(category.id)}
              >
                {t(`${category.name}`)}
              </MenuButton>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
