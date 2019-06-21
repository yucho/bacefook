import { receiveAllUsers } from 'actions/users-actions';
import { receivePosts } from 'actions/posts-actions';

export const receiveAllData = response => dispatch => {
  const { users, posts } = response;
  if (users) dispatch(receiveAllUsers(users));
  if (posts) dispatch(receivePosts(posts));
};
