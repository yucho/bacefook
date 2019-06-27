import React from 'react';
import { useSelector } from 'react-redux';
import CommentsShow from 'components/comment/comment-show';
import CommentForm from 'components/comment/comment-form';

const CommentIndex = ({ post }) => {
  const comments = useSelector((state) => state.comments);
  const replies = [];
  console.log('POST is', post);
  for (const id of post.comments) {
    const comment = comments[id];
    if(comment) replies.push(comment);
  }
  replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  return <section className="comment-index-container">
  {replies.map((reply) => <CommentsShow key={reply.id} comment={reply} />)}
  <CommentForm commentable_id={post.id} commentable_type="Post" />
  </section>
};

export default CommentIndex;
