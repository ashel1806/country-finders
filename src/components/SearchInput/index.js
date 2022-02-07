import styled from 'styled-components';
import theme from '../../utils/theme';

const Container = styled.div`
  margin: 1.5em 0;
  max-width: 500px;
`;

const Icon = styled.div`
  position: absolute;
  padding: .8em 1em;
  color: ${theme.colors.light['dark-gray']};
  font-weight: ${theme.fontWeights['extra-bold']}
`;

const Input = styled.input`
  border-radius: .5em;
  background-color: ${theme.colors.white};
  font-size: ${theme.fontSizes.homepage};
  width: 100%;
  padding: 20px 50px;

  &:placeholder {
    color: ${theme.colors.light['dark-gray']}
  }
`;

const SearchInput = () => {
  return (
    <Container>
      <Icon>
        o
      </Icon>
      <Input
        placeholder='Search for a country...'
      />
    </Container>
  );
};

export default SearchInput;