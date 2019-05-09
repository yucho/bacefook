import { RECEIVE_ALL_USERS } from 'actions/users-actions';

const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const newState = {}
      action.users.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, { users: newState });
    default:
      return prevState;
  }
};

export default usersReducer;
