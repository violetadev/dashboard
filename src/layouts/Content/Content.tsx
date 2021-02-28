import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
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
    width: 70vw;
    height: 40vh;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 80vw;
    height: 90vh;
  }
`;

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
