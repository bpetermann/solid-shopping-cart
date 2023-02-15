import { SearchBar, InfoBar, Navbar } from '@/components/Molecules/Header';
import { Component, createSignal } from 'solid-js';

const Header: Component = () => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const [searchTerm, setSearchTerm] = createSignal<string>('');

  const closeInfo = () => {
    setShowInfo(false);
  };

  const toggleMenu: () => void = () => {
    console.log(isOpen());
    setIsOpen(!isOpen());
  };

  return (
    <header>
      {showInfo() && <InfoBar closeInfo={closeInfo} />}
      <Navbar />
      <SearchBar
        toggleMenu={toggleMenu}
        value={searchTerm()}
        setSearchTerm={setSearchTerm}
      />
    </header>
  );
};

export default Header;
