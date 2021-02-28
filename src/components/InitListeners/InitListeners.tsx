import React, { useEffect } from 'react';
import { applyAuthListener } from '@redux/auth/actions';
import { useDispatch } from 'react-redux';
import subscribePersistedState from '../../store/persistedState';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applyAuthListener());
    subscribePersistedState();
  }, [dispatch]);

  return null;
};

export default InitListeners;
