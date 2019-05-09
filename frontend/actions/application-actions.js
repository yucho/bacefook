import { receiveAllUsers } from 'actions/users-actions';
import { receivePosts } from 'actions/posts-actions';

export const receiveAllData = response => dispatch => {
  const { users, posts } = response;
  dispatch(receiveAllUsers(users));
  dispatch(receivePosts(posts));
};
