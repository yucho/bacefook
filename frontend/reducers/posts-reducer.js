import { RECEIVE_POSTS } from 'actions/posts-actions';

const postsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_POSTS:
      const newState = {}
      action.posts.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, newState);
    default:
      return prevState;
  }
};

export default postsReducer;
