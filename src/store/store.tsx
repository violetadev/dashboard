/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import throttle from '../helpers/throttle';

import { loadState, saveState } from '../helpers/localStorage';

import userSettingsMiddleware from '../features/userSettings/userSettings.middleware';
import rootReducer from '../redux/reducers/root';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middlewares = [thunk, userSettingsMiddleware];
const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  // rootReducer
  persistedState,
  // compose(applyMiddleware(...middlewares))
  composeEnhancer(applyMiddleware(thunk, ...middlewares))
  // devTools: process.env.NODE_ENV !== 'production',
  // composeEnhancers
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
