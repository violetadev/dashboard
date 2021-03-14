import { Middleware } from 'redux';

import { SET_USER_NAME, SET_USER_TOPICS } from './userSettings.reducer';

const userSettingsMiddleware: Middleware = store => next => action => {
  // Do stuff
  console.log(action);
  switch (action.type) {
    case SET_USER_NAME:
      console.log('lala', action);
      // return { ...state, userName: action.payload.data };
      break;
    case SET_USER_TOPICS:
      console.log('lala2', action);
      // return { ...state, topics: action.payload.data };
      break;
    default:
      break;
  }
  // console.log(action, 'action');
  // dispatch(setUserName('test'));
  // console.log(store, 'api');
  return next(action);
};

export default userSettingsMiddleware;
