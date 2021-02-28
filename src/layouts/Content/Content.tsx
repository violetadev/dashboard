import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  background: ${({ theme }) => theme.backgrounds.containerBackground};
  box-shadow: 38px 37px 99px #0000004d;
  border-radius: 40px;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
