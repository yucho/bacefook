import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from 'actions/posts-actions';

const postsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {}
  switch(action.type) {
    case RECEIVE_POSTS:
      action.posts.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, newState);
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return Object.assign({}, prevState, newState);
    case REMOVE_POST:
      newState = Object.assign({}, prevState);
      if(newState[action.id]) {
        delete newState[action.id];
        return newState
      }
      return prevState;
    default:
      return prevState;
  }
};

export default postsReducer;
