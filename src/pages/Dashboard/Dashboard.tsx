import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers/root';
import Basic from '@layouts/Basic';
import Wrapper from '@layouts/Wrapper';
import Spinner from '@components/spinner/Spinner';

const Dashboard: React.FC = () => {
  const userSettings = useSelector((state: RootState) => state.userSettings);

  return (
    <Basic>
      <Wrapper>
        <div>
          <h1>
            Welcome &nbsp;
            {userSettings.userName}
            <Spinner />
          </h1>
        </div>
      </Wrapper>
    </Basic>
  );
};

export default Dashboard;
