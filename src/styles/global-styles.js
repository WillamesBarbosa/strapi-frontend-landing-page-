import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family.default};
      font-size: 1.6rem;
    `}
  }
  h1, h2, h3, h4, h5, h6 {
    ${({ theme }) => css`
      font-family: ${theme.font.family.secondary};
    `}

  }
`;
