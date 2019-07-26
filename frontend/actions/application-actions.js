import { receiveAllUsers } from 'actions/users-actions';
import { receiveComments } from 'actions/comments-actions';
import { receivePhotos } from 'actions/photos-actions';
import { receivePosts } from 'actions/posts-actions';
import likesActions from 'actions/likes-actions';

export const receiveAllData = response => dispatch => {
  const { users, posts, comments, photos, likes } = response;
  if (users) dispatch(receiveAllUsers(users));
  if (posts) dispatch(receivePosts(posts));
  if (comments) dispatch(receiveComments(comments));
  if (photos) dispatch(receivePhotos(photos));
  if (likes) dispatch(likesActions.receiveLikes(likes));
};
