import { Component, createSignal } from 'solid-js';
import InfoBar from '../Molecules/InfoBar';

const Header: Component = () => {
  const [showInfo, setShowInfo] = createSignal<boolean>(true);

  const closeInfo = () => {
    setShowInfo(false);
  };

  return <header>{showInfo() && <InfoBar closeInfo={closeInfo} />}</header>;
};

export default Header;
