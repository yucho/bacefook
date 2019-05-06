import { createStore, applyMiddleware } from 'redux';
import entitiesReducer from 'reducers/entities-reducer';
import thunk from 'middleware/thunk';

const configureStore = (preloadedState = {}) => createStore(
  entitiesReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore;
