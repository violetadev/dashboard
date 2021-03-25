import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/reducers/root';
import Basic from '@layouts/Basic';
import Wrapper from '@layouts/Wrapper';
import Spinner from '@components/spinner/Spinner';
import Onboarding from '../Onboarding/Onboarding';
import { getNews } from '../../features/newsArticles/newsArticles.reducer';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const userSettings = useSelector((state: RootState) => state.userSettings);

  useEffect(() => {
    if (userSettings.topics.length > 0) {
      dispatch(getNews(userSettings.topics));
    }
  }, [userSettings]);

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
              <Spinner />
            </h1>
          </div>
        )}
      </Wrapper>
    </Basic>
  );
};

export default Main;
