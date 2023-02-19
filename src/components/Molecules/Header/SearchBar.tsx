import { Input, Container, BurgerButton } from '@/components/Atoms';
import { useI18n } from '@solid-primitives/i18n';
import { Component } from 'solid-js';

const SearchBar: Component<{
  toggleMenu: () => void;
  setSearchTerm: (value: string) => void;
  value: string;
}> = (props) => {
  const [t] = useI18n();

  return (
    <Container classname='searchbar'>
      <BurgerButton onClick={props.toggleMenu} />
      <Input
        value={props.value}
        setInput={props.setSearchTerm}
        classname='search'
        marker={t('Search')}
      />
    </Container>
  );
};

export default SearchBar;
