import { fetchPostPhotos } from 'actions/photos-actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const createPost = (post) => (dispatch) => {
  const next = post.get('post[files][]') ? fetchPostPhotos : null;
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: post,
    contentType: false,
    processData: false
  })
    .then(
      (success) => {
        dispatch(receivePost(success));
        if (next) dispatch(next(success.id));
      },
      (error) => console.log(error)
    )
    };

export const fetchPost = (id) => (dispatch) => (
  $.ajax({
    url: `/api/posts/${id}`,
    method: 'GET'
  })
    .then(
      (success) => dispatch(receivePost(success)),
      (error) => console.log(error)
    )
);

export const destroyPost = ({id}) => (dispatch) => (
  $.ajax({
    url: `/api/posts/${id}`,
    method: 'DELETE'
  })
    .then(
      () => dispatch(removePost(id)),
      (error) => console.log(error)
    )
);

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  id
});
