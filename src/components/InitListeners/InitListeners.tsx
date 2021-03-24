import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadState } from '../../helpers/localStorage';
import { getNews } from '../../features/newsArticles/newsArticles.reducer';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadState();
  }, []);

  return null;
};

export default InitListeners;
