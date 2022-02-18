import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Nunito', sans-serif;
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme['foreground']};
    transition: all .5s linear;
  }
`;