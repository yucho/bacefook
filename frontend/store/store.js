import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import entitiesReducer from 'reducers/entities-reducer';
import thunk from 'middleware/thunk';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const configureStore = (preloadedState = {}) => createStore(
  entitiesReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

export default configureStore;
