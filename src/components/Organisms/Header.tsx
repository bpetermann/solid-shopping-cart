import { Component, createSignal } from 'solid-js';
import InfoBar from '../Molecules/InfoBar';
import Navbar from '../Molecules/Navbar';

const Header: Component = () => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);

  const closeInfo = () => {
    setShowInfo(false);
  };

  return (
    <header>
      {showInfo() && <InfoBar closeInfo={closeInfo} />}
      <Navbar />
    </header>
  );
};

export default Header;
