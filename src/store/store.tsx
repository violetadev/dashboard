/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import '../redux/middlewares/middlewares';
import rootMiddleware from '../redux/middlewares/root';
import rootReducer from '../redux/reducers/root';
import { loadState, saveState } from '../helpers/localStorage';
import throttle from '../helpers/throttle';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk, ...rootMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      userSettings: store.getState().userSettings,
    });
  }, 1000)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
