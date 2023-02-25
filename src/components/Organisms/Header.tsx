import { SearchBar, InfoBar, Navbar } from '@/components/Molecules';
import { Cart, Favorites } from '@/components/Organisms';
import { Component, createSignal } from 'solid-js';
import { categories } from '@/lib/categories';
import type { Setter } from 'solid-js';

const Header: Component<{
  setCategory: Setter<{ id: number; name: string }>;
  category: { id: number; name: string };
  setSearchTerm: Setter<string>;
  value: string;
}> = (props) => {
  const [showFavorites, setShowFavorites] = createSignal<boolean>(false);
  const [showCart, setShowCart] = createSignal<boolean>(false);
  const [showInfo, setShowInfo] = createSignal<boolean>(true);

  const closeInfo = () => {
    setShowInfo(false);
  };

  const changeCategory = (id: number) => {
    let cat = categories.find((item) => item.id === id);
    if (cat) props.setCategory(cat);
  };

  return (
    <>
      <header>
        {showInfo() && <InfoBar closeInfo={closeInfo} />}
        <Navbar
          setShowFavorites={setShowFavorites}
          changeCategory={changeCategory}
          setShowCart={setShowCart}
          active={props.category}
          showCart={showCart()}
        />
        <SearchBar
          setSearchTerm={props.setSearchTerm}
          changeCategory={changeCategory}
          category={props.category}
          value={props.value}
        />
      </header>
      {showFavorites() && <Favorites setShowFavorites={setShowFavorites} />}
      {showCart() && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
