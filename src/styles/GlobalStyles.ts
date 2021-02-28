import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Noto Sans JP, sans-serif;

  }
  
  :root {
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.backgrounds.pageBackground};
  }
`;

export default GlobalStyles;
