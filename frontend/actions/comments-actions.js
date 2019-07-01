export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const createComment = (comment) => (dispatch) => (
  $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: comment
  })
  .then(
    (success) => dispatch(receiveComment(success)),
    (error) => console.log(error)
  )
);

export const fetchComment = (id) => (dispatch) => (
  $.ajax({
    url: `api/comments/${id}`,
    method: 'GET',
  })
    .then(
      (success) => dispatch(receiveComment(success)),
      (error) => console.log(error)
    )
);

export const destroyComment = ({ id }) => (dispatch) => (
  $.ajax({
    url: `api/comments/${id}`,
    method: 'DELETE'
  })
  .then(
    (success) => dispatch(removeComment(id)),
    (error) => console.log(error)
  )
);

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id
});
