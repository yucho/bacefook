export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const sendPost = (post) => (dispatch) => {
  $.ajax({
    url: 'api/posts',
    method: 'POST',
    data: post
  })
  .then(
    (success) => dispatch(receivePost(success)),
    (error) => console.log(error)
  );
};

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})
