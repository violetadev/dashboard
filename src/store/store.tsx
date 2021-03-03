import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@redux/reducers/root';
import thunk from 'redux-thunk';
import { loadState, saveState } from 'helpers/localStorage';
import throttle from '../helpers/throttle';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth,
    });
  }, 1000)
);

export default store;
