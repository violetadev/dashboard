import styled, { Theme, ThemeProps } from 'styled-components';

import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Basic: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Basic;
