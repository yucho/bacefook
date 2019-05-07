import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from 'actions/session-actions';

const defaults = { currentUser: null };
const usersReducer = (prevState = defaults, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, prevState, { currentUser: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, prevState, { currentUser: null });
    default:
      return prevState;
  }
};

export default usersReducer;
