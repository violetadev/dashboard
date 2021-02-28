import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0px;
  box-shadow: 38px 37px 99px #0000004d;
  height: 100%;
  left: 50%;
  margin: 0;
  min-height: 400px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 70vw;
    height: 40vh;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    padding: 200px 75px 75px 75px;
    width: 80vw;
    height: 90vh;
    border-radius: 20px;
  }
`;

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
