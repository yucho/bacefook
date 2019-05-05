import { createStore, applyMiddleware } from 'redux';
import thunk from 'middleware/thunk';

const configureStore = (preloadedState = {}) => createStore(
  (state) => { state }, // tentative reducer !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore;
