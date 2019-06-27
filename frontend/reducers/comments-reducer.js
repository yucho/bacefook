import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from 'actions/comments-actions';

const commentsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {}
  switch (action.type) {
    case RECEIVE_COMMENTS:
      action.comments.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, newState);
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return Object.assign({}, prevState, newState);
    case REMOVE_COMMENT:
      newState = Object.assign({}, prevState);
      if (newState[action.id]) {
        delete newState[action.id];
        return newState
      }
      return prevState;
    default:
      return prevState;
  }
};

export default commentsReducer;
