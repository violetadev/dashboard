import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers/root';
import Basic from '@layouts/Basic';
import Wrapper from '@layouts/Wrapper';
import Onboarding from '../Onboarding/Onboarding';

const Main: React.FC = () => {
  const userSettings = useSelector((state: RootState) => state.userSettings);

  return (
    <Basic>
      <Wrapper>
        {!userSettings.topics.length ? (
          <Onboarding />
        ) : (
          <div>
            <h1>
              Welcome &nbsp;
              {userSettings.userName}
            </h1>
          </div>
        )}
      </Wrapper>
    </Basic>
  );
};

export default Main;
