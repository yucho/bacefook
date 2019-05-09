export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
