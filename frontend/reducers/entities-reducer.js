import { combineReducers } from 'redux';
import { LOGOUT_CURRENT_USER } from 'actions/session-actions.js';
import sessionReducer from 'reducers/session-reducer';
import errorsReducer from 'reducers/errors-reducer';
import usersReducer from 'reducers/users-reducer';
import postsReducer from 'reducers/posts-reducer';
import commentsReducer from 'reducers/comments-reducer';
import photosReducer from 'reducers/photos-reducer';

const entitiesReducer = (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    const { images } = state;
    state = { images };
  }
  return combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    photos: photosReducer,
    images: (state={}) => state
  })(state, action);
};

export default entitiesReducer;
