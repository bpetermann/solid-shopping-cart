import {
  SearchBar,
  InfoBar,
  Navbar,
  NavbarMobile,
} from '@/components/Molecules';
import { Component, createSignal } from 'solid-js';
import type { Setter } from 'solid-js';

const Header: Component<{
  setCategory: Setter<{ id: number; name: string }>;
  categories: { id: number; name: string }[];
  category: { id: number; name: string };
  setShowCart: (show: boolean) => void;
  setSearchTerm: Setter<string>;
  cartLength: number;
  showCart: boolean;
  value: string;
}> = (props) => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  const mainCategories = props.categories.filter((item) => item.id < 3);

  const closeInfo = () => {
    setShowInfo(false);
  };

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen());
  };

  const changeCategory = (id: number) => {
    let cat = props.categories.find((item) => item.id === id);
    if (cat) props.setCategory(cat);
  };

  return (
    <header>
      {showInfo() && <InfoBar closeInfo={closeInfo} />}
      <Navbar
        setShowCart={props.setShowCart}
        changeCategory={changeCategory}
        cartLength={props.cartLength}
        categories={mainCategories}
        showCart={props.showCart}
        active={props.category}
      />
      <SearchBar
        setSearchTerm={props.setSearchTerm}
        value={props.value}
        toggleMenu={toggleMenu}
      />
      {isOpen() && (
        <NavbarMobile
          changeCategory={changeCategory}
          categories={props.categories}
          active={props.category}
        />
      )}
    </header>
  );
};

export default Header;
