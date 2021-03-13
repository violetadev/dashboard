import { combineReducers } from 'redux';
import userSettingsReducer from '../../features/userSettings/userSettings.reducer';
/* eslint-disable no-underscore-dangle */
// import { applyMiddleware } from 'redux';

// import { userSettingsMiddleware } from '../../features/userSettings/userSettings.middleware';

const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
