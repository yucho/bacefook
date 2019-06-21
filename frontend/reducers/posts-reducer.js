import { RECEIVE_POSTS, RECEIVE_POST } from 'actions/posts-actions';

const postsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  const newState = {}
  switch(action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, newState);
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return Object.assign({}, prevState, newState);
    default:
      return prevState;
  }
};

export default postsReducer;
