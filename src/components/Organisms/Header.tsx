import {
  SearchBar,
  InfoBar,
  Navbar,
  NavbarMobile,
} from '@/components/Molecules';
import { Component, createSignal } from 'solid-js';
import { categories } from '@/lib/categories';
import type { Setter } from 'solid-js';

const Header: Component<{
  setCategory: Setter<{ id: number; name: string }>;
  category: { id: number; name: string };
  setShowCart: (show: boolean) => void;
  setSearchTerm: Setter<string>;
  showCart: boolean;
  value: string;
}> = (props) => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  const closeInfo = () => {
    setShowInfo(false);
  };

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen());
  };

  const changeCategory = (id: number) => {
    let cat = categories.find((item) => item.id === id);
    if (cat) props.setCategory(cat);
  };

  return (
    <header>
      {showInfo() && <InfoBar closeInfo={closeInfo} />}
      <Navbar
        setShowCart={props.setShowCart}
        changeCategory={changeCategory}
        showCart={props.showCart}
        active={props.category}
      />
      <SearchBar
        setSearchTerm={props.setSearchTerm}
        toggleMenu={toggleMenu}
        value={props.value}
      />
      {isOpen() && (
        <NavbarMobile changeCategory={changeCategory} active={props.category} />
      )}
    </header>
  );
};

export default Header;
