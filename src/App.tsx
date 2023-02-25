import { Header, Footer } from '@/components/Organisms';
import { Component, createSignal } from 'solid-js';
import { categories } from '@/lib/categories';
import Template from './components/Template';

const App: Component = () => {
  const [showCart, setShowCart] = createSignal<boolean>(false);
  const [showFavorites, setShowFavorites] = createSignal<boolean>(false);
  const [searchTerm, setSearchTerm] = createSignal<string>('');
  const [category, setCategory] = createSignal<{ id: number; name: string }>(
    categories[0]
  );

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites()}
        setCategory={setCategory}
        setShowCart={setShowCart}
        category={category()}
        showCart={showCart()}
        value={searchTerm()}
      />
      <Template
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites()}
        setShowCart={setShowCart}
        showCart={showCart()}
        category={category()}
        value={searchTerm()}
      />
      <Footer />
    </>
  );
};
export default App;
