import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
  }
  
  :root {
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.backgrounds.pageBackground};
  }
`;

export default GlobalStyles;
