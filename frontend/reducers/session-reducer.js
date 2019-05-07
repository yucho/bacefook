import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from 'actions/session-actions';

const defaults = { id: null };
const sessionReducer = (prevState = defaults, action) => {
  Object.freeze(prevState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, prevState, { id: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, prevState, { id: null });
    default:
      return prevState;
  }
};

export default sessionReducer;
