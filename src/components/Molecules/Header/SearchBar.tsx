import { Input, Container, BurgerButton } from '@/components/Atoms';
import { Component } from 'solid-js';

const SearchBar: Component<{
  toggleMenu: () => void;
  setSearchTerm: (value: string) => void;
  value: string;
}> = ({ toggleMenu, value, setSearchTerm }) => {
  return (
    <Container classname='searchbar'>
      <BurgerButton onClick={toggleMenu} />
      <Input value={value} setSearchTerm={setSearchTerm} />
    </Container>
  );
};

export default SearchBar;
