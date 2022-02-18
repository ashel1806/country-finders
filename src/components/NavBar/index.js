/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { func, object } from 'prop-types';
import { theme } from '../../utils/theme';

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme['background']};
  transition: all .5s linear;
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
  color: ${({ theme }) => theme['text']};
  transition: all .5s linear;
`;

const ThemeButton = styled.button`
  text-decoration: none;
  outline: none;
  background-color transparent;
  color: ${({ theme }) => theme['text']};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.homepage};
  cursor: pointer;

  i {
    margin-right: .5em;
  }
`;

export default function NavBar ({ themeMode, setTheme }) {
  console.log(themeMode);
  return (
    <NavWrapper theme={themeMode}>
      <Container>
        <Title>Where in the world?</Title>
        <ThemeButton onClick={setTheme}>
          <i className="fa-regular fa-moon"></i>
          Dark Mode
        </ThemeButton>
      </Container>
    </NavWrapper>
  );
}

NavBar.propTypes = {
  themeMode: object,
  setTheme: func.isRequired
};