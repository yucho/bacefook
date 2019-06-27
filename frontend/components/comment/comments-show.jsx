import React from 'react';
import { useSelector } from 'react-redux';
import CommentShow from './comment-show';

const CommentsShow = ({ comment }) => {
  const comments = useSelector((state) => state.comments);
  const replies = [];
  for (const id of post.comments) {
    replies.push(comments[id])
  }
  replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return <section className="comments-show-container">
    {replies.map((reply) => <CommentShow key={reply.id} comment={reply} />)}
  </section>
};

export default CommentShow;
