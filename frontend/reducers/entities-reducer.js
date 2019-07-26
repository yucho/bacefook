import { combineReducers } from 'redux';
import { LOGOUT_CURRENT_USER } from 'actions/session-actions.js';
import sessionReducer from 'reducers/session-reducer';
import errorsReducer from 'reducers/errors-reducer';
import usersReducer from 'reducers/users-reducer';
import commentsReducer from 'reducers/comments-reducer';
import likesReducer from 'reducers/likes-reducer';
import photosReducer from 'reducers/photos-reducer';
import postsReducer from 'reducers/posts-reducer';

const entitiesReducer = (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    const { images } = state;
    state = { images };
  }
  return combineReducers({
    users: usersReducer,
    session: sessionReducer,
    errors: errorsReducer,
    images: (state={}) => state,
    comments: commentsReducer,
    likes: likesReducer,
    photos: photosReducer,
    posts: postsReducer
  })(state, action);
};

export default entitiesReducer;
