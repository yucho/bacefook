import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERROR } from 'actions/session-actions';

const sessionErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERROR:
      return action.errors;
    default:
      return prevState;
  }
};

export default sessionErrorsReducer;
