import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('init');
  }, [dispatch]);

  return null;
};

export default InitListeners;
