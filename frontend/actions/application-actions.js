import { receiveAllUsers } from 'actions/users-actions';
import { receiveComments } from 'actions/comments-actions';
import { receiveLikes } from 'actions/likes-actions';
import { receivePhotos } from 'actions/photos-actions';
import { receivePosts } from 'actions/posts-actions';

export const receiveAllData = response => dispatch => {
  const { users, posts, comments, photos, likes } = response;
  if (users) dispatch(receiveAllUsers(users));
  if (comments) dispatch(receiveComments(comments));
  if (likes) dispatch(receiveLikes(likes));
  if (photos) dispatch(receivePhotos(photos));
  if (posts) dispatch(receivePosts(posts));
};
