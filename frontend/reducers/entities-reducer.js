import { combineReducers } from 'redux';
import sessionReducer from 'reducers/session-reducer';
import usersReducer from 'reducers/users-reducer';
import postsReducer from 'reducers/posts-reducer';
import errorsReducer from 'reducers/errors-reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  posts: postsReducer,
  errors: errorsReducer,
  images: (state={}) => state
});

export default entitiesReducer;
