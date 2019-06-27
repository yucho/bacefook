import { receiveAllUsers } from 'actions/users-actions';
import { receivePosts } from 'actions/posts-actions';
import { receiveComments } from 'actions/comments-actions';

export const receiveAllData = response => dispatch => {
  const { users, posts, comments } = response;
  if (users) dispatch(receiveAllUsers(users));
  if (posts) dispatch(receivePosts(posts));
  if (comments) dispatch(receiveComments(comments));
};
