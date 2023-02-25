import { Input, Container, BurgerButton } from '@/components/Atoms';
import { NavbarMobile } from '@/components/Molecules';
import { Component, createSignal } from 'solid-js';
import { useI18n } from '@solid-primitives/i18n';

const SearchBar: Component<{
  setSearchTerm: (value: string) => void;
  category: { id: number; name: string };
  changeCategory: (id: number) => void;
  value: string;
}> = (props) => {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);
  const [t] = useI18n();

  const toggleMenu: () => void = () => {
    setIsOpen(!isOpen());
  };

  return (
    <>
      <Container classname='searchbar'>
        <BurgerButton onClick={toggleMenu} />
        <Input
          setInput={props.setSearchTerm}
          value={props.value}
          marker={t('Search')}
          classname='search'
        />
      </Container>
      {isOpen() && (
        <NavbarMobile
          changeCategory={props.changeCategory}
          active={props.category}
        />
      )}
    </>
  );
};

export default SearchBar;
