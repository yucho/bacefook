import { combineReducers } from 'redux';
import sessionReducer from 'reducers/session-reducer';
import errorsReducer from 'reducers/errors-reducer';
import usersReducer from 'reducers/users-reducer';
import postsReducer from 'reducers/posts-reducer';
import commentsReducer from 'reducers/comments-reducer';
import photosReducer from 'reducers/photos-reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  photos: photosReducer,
  images: (state={}) => state
});

export default entitiesReducer;
