import React from 'react';
import UserIcon from 'components/ui/user-icon';

const CommentShow = ({ comment }) => {
  return <section className="comment-show-container">
    <UserIcon className="comment-show-user-icon" />
    <span className="comment-show-comment">{comment.body}</span>
  </section>
};

export default CommentShow;
