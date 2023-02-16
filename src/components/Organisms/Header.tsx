import {
  SearchBar,
  InfoBar,
  Navbar,
  NavbarMobile,
} from '@/components/Molecules';
import { Component, createSignal } from 'solid-js';

const Header: Component = () => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const [searchTerm, setSearchTerm] = createSignal<string>('');
  const [category, setCategory] = createSignal<
    { id: number; name: string } | undefined
  >();
  const [categories] = createSignal<{ id: number; name: string }[]>([
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Bags' },
    { id: 3, name: 'Women' },
    { id: 4, name: 'Men' },
    { id: 5, name: 'Sport' },
  ]);

  const mainCategories = categories().filter((item) => item.id < 3);

  const closeInfo = () => {
    setShowInfo(false);
  };

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen());
  };

  const changeCategory = (id: number) => {
    let cat = categories().find((item) => item.id === id);
    setCategory(cat);
  };

  return (
    <header>
      {showInfo() && <InfoBar closeInfo={closeInfo} />}
      <Navbar
        changeCategory={changeCategory}
        categories={mainCategories}
        active={category()}
      />
      <SearchBar
        setSearchTerm={setSearchTerm}
        toggleMenu={toggleMenu}
        value={searchTerm()}
      />
      {isOpen() && (
        <NavbarMobile
          changeCategory={changeCategory}
          categories={categories()}
          active={category()}
        />
      )}
    </header>
  );
};

export default Header;
