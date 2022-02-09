import styled from 'styled-components';
import theme from '../../utils/theme';

const Container = styled.div`
  margin: 1.5em 0;
  max-width: 500px;
  background-color: ${theme.colors.white};
  font-size: ${theme.fontSizes.homepage};
`;

const Icon = styled.div`
  padding: 23px 0;
  margin-left: 1.5em;
  position: absolute;
  color: ${theme.colors.light['dark-gray']};
  font-weight: ${theme.fontWeights['extra-bold']};
  width: 20px;
`;

const Input = styled.input`
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
        <i className="fa-solid fa-magnifying-glass"></i>
      </Icon>
      <Input
        placeholder='Search for a country...'
      />
    </Container>
  );
};

export default SearchInput;