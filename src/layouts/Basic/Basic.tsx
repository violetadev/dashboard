import styled, { Theme, ThemeProps } from 'styled-components';

import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const BoxContainer = styled.div`
  width: 220px;
  min-height: 400px;
  background: ${({ theme }) => theme.backgrounds.containerBackground};
  box-shadow: 38px 37px 99px #0000004d;
  border-radius: 40px;
  width: 90vw;
  height: 90vh;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 45px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 80vw;
    height: 50vh;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 80vw;
    height: 90vh;
  }
`;

const Basic: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <BoxContainer>{children}</BoxContainer>
    </Wrapper>
  );
};

export default Basic;
