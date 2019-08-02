import { receiveAllData } from 'actions/application-actions';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchNewsFeed = () => (dispatch) => {
  $.ajax({url: '/api/users'}).then(
    (data) => dispatch(receiveAllData(data)),
    (error) => console.log(error)
  );
};

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});
