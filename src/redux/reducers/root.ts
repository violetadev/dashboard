import { combineReducers } from 'redux';

import userSettingsReducer from '../../features/userSettings/userSettings.reducer';

const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
