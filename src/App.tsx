import { Header, Footer } from '@/components/Organisms';
import { Component, createSignal } from 'solid-js';
import { categories } from '@/lib/categories';
import Template from './components/Template';

const App: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal<string>('');
  const [category, setCategory] = createSignal<{ id: number; name: string }>(
    categories[0]
  );

  return (
    <>
      <Header
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        category={category()}
        value={searchTerm()}
      />
      <Template category={category()} value={searchTerm()} />
      <Footer />
    </>
  );
};
export default App;
