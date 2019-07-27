import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import UserIcon from 'components/ui/user-icon';
import { createComment } from 'actions/comments-actions'; 
import { fetchPost } from 'actions/posts-actions';
import { fetchComment } from '../../actions/comments-actions';

const CommentForm = ({ commentable_id, commentable_type }) => {
  const user = useSelector((state) => state.users[state.session.id]);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const commentable = { id: commentable_id, type: commentable_type };

  return <section className="comment-form-container">
    <UserIcon className="comment-form-user-icon" user={user} />
    <Textarea
      className="comment-form-textarea"
      id={`comment-form-textarea-${commentable_type.toLowerCase()}-${commentable_id}`}
      value={text}
      onChange={update(setText)}
      placeholder="Write a comment..."
      onKeyDown={submit(text, user, commentable, dispatch, setText)} />
  </section>;
};

const submit = (text, user, commentable, dispatch, clearField) => (e) => {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    const comment = {
      body: text,
      commenter_id: user.id,
      commenter_type: 'User',
      commentable_id: commentable.id,
      commentable_type: commentable.type
    };
    createComment({ comment })(dispatch)
    .then(
      (success) => updateCommentable(dispatch, commentable),
      (error) => console.log(error)
    );
    clearField('');
  }
};

const updateCommentable = (dispatch, { id, type }) => {
  switch(type) {
    case 'Post':
      dispatch(fetchPost(id)); break;
    case 'Comment':
      dispatch(fetchComment(id)); break;
    default: break;
  }
}

const update = (setText) => (e) => {
  setText(e.target.value);
};

export default CommentForm;
