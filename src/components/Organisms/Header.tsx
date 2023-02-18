import {
  SearchBar,
  InfoBar,
  Navbar,
  NavbarMobile,
} from '@/components/Molecules';
import { Component, createSignal } from 'solid-js';
import type { Setter } from 'solid-js';

const Header: Component<{
  setShowCart: (show: boolean) => void;
  setSearchTerm: Setter<string>;
  cartLength: number;
  showCart: boolean;
  value: string;
}> = (props) => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const categories: { id: number; name: string }[] = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Bags' },
    { id: 3, name: 'Women' },
    { id: 4, name: 'Men' },
    { id: 5, name: 'Sport' },
  ];
  const [category, setCategory] = createSignal<{ id: number; name: string }>(
    categories[0]
  );

  const mainCategories = categories.filter((item) => item.id < 3);

  const closeInfo = () => {
    setShowInfo(false);
  };

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen());
  };

  const changeCategory = (id: number) => {
    let cat = categories.find((item) => item.id === id);
    setCategory(cat as { id: number; name: string });
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
        active={category()}
      />
      <SearchBar
        setSearchTerm={props.setSearchTerm}
        value={props.value}
        toggleMenu={toggleMenu}
      />
      {isOpen() && (
        <NavbarMobile
          changeCategory={changeCategory}
          categories={categories}
          active={category()}
        />
      )}
    </header>
  );
};

export default Header;
