import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 220px;
  min-height: 400px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 38px 37px 99px #0000004d;

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  border-radius: 0px;

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
