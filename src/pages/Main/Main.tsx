import Basic from '@layouts/Basic';
import Content from '@layouts/Content';
import React from 'react';
import Tag from '@components/tag';
import Wrapper from '@layouts/Wrapper';
import Onboarding from '../Onboarding/Onboarding';

const Main: React.FC = () => {
  return (
    <Basic>
      <Wrapper>
        <Content>
          <Onboarding />
        </Content>
      </Wrapper>
    </Basic>
  );
};

export default Main;
