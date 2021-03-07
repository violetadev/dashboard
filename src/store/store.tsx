import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@redux/reducers/root';
import { loadState, saveState } from '../helpers/localStorage';
import throttle from '../helpers/throttle';

const persistedState = loadState();

export const store = configureStore({
  reducer: { rootReducer, persistedState },
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(
  throttle(() => {
    saveState({
      userSettings: store.getState().rootReducer.userSettings,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
