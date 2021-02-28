import { store } from './store';

const subscribePersistedState = (): void => {
  store.subscribe(() => {
    localStorage.setItem('persistedState', JSON.stringify(store.getState()));
  });
};

export default subscribePersistedState;
