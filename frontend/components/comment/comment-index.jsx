import React from 'react';
import CommentShow from 'components/comment/comment-show';
import CommentForm from 'components/comment/comment-form';

const CommentIndex = ({ post }) => {
  return <section className="comment-index-container">
    {/* Map each comment to CommentShow */}
  <CommentForm post={post} />
  </section>
};

export default CommentIndex;
