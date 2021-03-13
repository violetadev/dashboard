import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';

import { SET_USER_NAME, SET_USER_TOPICS } from './userSettings.reducer';
// import { setUserName } from './userSettings.slice';
// import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';
// // import { Dispatch, AnyAction, Action } from 'redux';

// import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

// import {
//   SET_USER_NAME,
//   SET_USER_TOPICS,
//   UserSettingsStateInterface,
// } from './userSettings.slice';
// import { saveState } from '../../helpers/localStorage';

// // interface MiddlewareProps {
// //   dispatch: Dispatch<AnyAction>;
// //   getState: () => State;
// // }

// const userSettingsMiddleware = (
//   dispatch: Dispatch<any>,
//   getState: () => UserSettingsStateInterface
// ) => (next: Dispatch<Action>) => (action: AnyAction) => {
//   next(action);
//   switch (action.type) {
//     case `${SET_USER_NAME}`:
//       console.log('middleware');
//       dispatch(
//         saveState({
//           userSettings: getState(),
//         })
//       );

//       break;
//     case `${SET_USER_TOPICS}`:
//       dispatch(
//         saveState({
//           userSettings: getState(),
//         })
//       );
//       break;

//     default:
//       break;
//   }
// };

// export default userSettingsMiddleware;

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
  console.log(action, 'action');
  // dispatch(setUserName('test'));
  console.log(store, 'api');
  next(action);
};

export default userSettingsMiddleware;
