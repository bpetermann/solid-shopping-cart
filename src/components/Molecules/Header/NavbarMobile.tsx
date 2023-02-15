import styles from './NavbarMobile.module.css';
import { MenuButton } from '@/components/Atoms';
import { Component, For } from 'solid-js';

const NavbarMobile: Component<{
  changeCategory: (id: number) => void;
  categories: { id: number; name: string }[];
  active: { id: number; name: string } | undefined;
}> = (props) => {
  return (
    <nav class={styles.navbar}>
      <ul class={styles.categories}>
        <For each={props.categories}>
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
                {category.name}
              </MenuButton>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
