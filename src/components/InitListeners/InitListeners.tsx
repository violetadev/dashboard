import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadState } from '../../helpers/localStorage';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadState();
  }, [dispatch]);

  return null;
};

export default InitListeners;
