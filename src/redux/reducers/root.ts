import { combineReducers } from 'redux';

import newsReducer from '../../features/newsArticles/newsArticles.reducer';
import userSettingsReducer from '../../features/userSettings/userSettings.reducer';

const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
