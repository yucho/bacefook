import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostShowContext } from './post-show';
import { createLike, destroyLike } from 'actions/likes-actions';
import { fetchPost } from 'actions/posts-actions';

const assign = (obj) => (prev) => Object.assign({}, prev, obj);

const PostLikeComment = () => {
  const {post} = useContext(PostShowContext);
  const [state, setState] = useState({ you: null });

  const [myUserId, allLikes] = useSelector((state) => [state.session.id, state.likes]);
  const likes = post.likes.map((id) => allLikes[id]).filter((like) => !!like);
  const myLike = likes.find((like) => like.user_id === myUserId);

  useEffect(() => {
    const reaction = myLike ? myLike.reaction : null;
    setState(assign({ you: reaction }));
  }, [likes]);

  const dispatch = useDispatch();
  const toggleLike = (reaction) => () => {
    if (state.you && !reaction) {
      if(myLike) dispatch(destroyLike(myLike));
      setState(assign({ you: null }));
    } else {
      const newReaction = reaction || 'like';
      let task;
      if (myLike) {
        task = destroyLike(myLike)(dispatch);
      } else {
        task = Promise.resolve();
      }
      task.then(() => dispatch(createLike({
        like: {
          likeable_id: post.id,
          likeable_type: 'Post',
          reaction: newReaction
        }
      }))).then(() => dispatch(fetchPost(post.id)));
      setState(assign({ you: reaction }));
    }
  };

  return <aside className="post-likes-and-comments">
    <ul>
      <li
        className={'post-like-button' + (state.you ? ` post-like-button-clicked-${state.you}` : '')}
        onClick={toggleLike()}
      >
        <i className="sprite post-like-logo"></i>
        <span>Like</span>
      </li>
      <li><i className="sprite2 post-comment-logo"></i><span>Comment</span></li>
    </ul>
  </aside>
};

export default PostLikeComment;
