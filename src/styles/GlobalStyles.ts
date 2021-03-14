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

  input {
    background:  ${({ theme }) => theme.input.common.background};
    border: ${({ theme }) => theme.input.common.border};
    borderRadius:  ${({ theme }) => theme.input.common.borderRadius};
    height:  ${({ theme }) => theme.input.common.height};
    padding: 20px;
    min-width:  ${({ theme }) => theme.input.common.minWidth};
  }

  body {
    background: ${({ theme }) => theme.backgrounds.pageBackground};
  }
`;

export default GlobalStyles;
