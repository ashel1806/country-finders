import styled from 'styled-components';
import { theme } from '../../utils/theme';

const NavWrapper = styled.div`
  background-color: ${theme.colors.white};
`;

const Container = styled.div`
  max-width: ${theme.screens.desktop};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em .8em;
`;

const Title = styled.span`
  font-weight: ${theme.fontWeights.bold};
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <Container>
        <Title>Where in the world?</Title>
        <button>Dark Mode</button>
      </Container>
    </NavWrapper>
  );
};

export default NavBar;