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
      auth: store.getState().rootReducer.auth,
    });
  }, 1000)
);

export default store;
