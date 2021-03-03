import React, { useEffect } from 'react';
import { applyAuthListener } from '@redux/auth/actions';
import { useDispatch } from 'react-redux';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applyAuthListener());
  }, [dispatch]);

  return null;
};

export default InitListeners;
