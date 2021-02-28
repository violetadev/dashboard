import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  background: ${({ theme }) => theme.backgrounds.containerBackground};
  box-shadow: 38px 37px 99px #0000004d;
  border-radius: 40px;
  height: 100%;
  margin: 200px 40px 0 40px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    margin: 0;
    width: 100%;
  }
`;

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
