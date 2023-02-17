import { Input, Container, BurgerButton } from '@/components/Atoms';
import { Component } from 'solid-js';

const SearchBar: Component<{
  toggleMenu: () => void;
  setSearchTerm: (value: string) => void;
  value: string;
}> = (props) => {
  return (
    <Container classname='searchbar'>
      <BurgerButton onClick={props.toggleMenu} />
      <Input
        value={props.value}
        setInput={props.setSearchTerm}
        classname='search'
        marker='Search'
      />
    </Container>
  );
};

export default SearchBar;
