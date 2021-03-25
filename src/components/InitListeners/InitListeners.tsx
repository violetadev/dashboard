import React, { useEffect } from 'react';
import { loadState } from '../../helpers/localStorage';

const InitListeners: React.FC = () => {
  useEffect(() => {
    loadState();
  }, []);

  return null;
};

export default InitListeners;
