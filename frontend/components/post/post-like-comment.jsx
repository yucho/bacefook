import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostShowContext } from './post-show';
import { createLike, destroyLike } from 'actions/likes-actions';
import { fetchPost } from 'actions/posts-actions';

const PostLikeComment = () => {
  const [clicked, setClicked] = useState(false);
  const [localReaction, setLocalReaction] = useState(null);

  const toggleLike = (reaction) => () => {
    const newReaction = reaction || 'like';
    if (!reaction) {
      setLocalReaction(prev => !!prev ? null : newReaction);
    } else {
      setLocalReaction(newReaction);
    }
    if (!clicked) setClicked(true);
  };

  const updateContext = useContext(PostShowContext).setCtxData;
  useEffect(() => updateContext({ localReaction }), [localReaction]);

  const post = useContext(PostShowContext).post;
  const likes = useSelector((state) => state.likes);
  const userId = useSelector((state) => state.session.id);
  const likeId = post.likes.find((id) => likes[id] && likes[id].user_id === userId);

  const initLocalReaction = () => {
    if (!clicked && likeId) setLocalReaction(likes[likeId].reaction);
  };
  useEffect(initLocalReaction, [post, likes]);

  const [, setTimeoutCallback] = useState(null);
  const dispatch = useDispatch();
  const syncLocalAndRemoteReaction = () => {
    setTimeoutCallback(prev => {
      if (prev) clearTimeout(prev);
      return setTimeout(() => {
        if (likeId && !localReaction) {
          destroyLike({ id: likeId })(dispatch)
            .then(() => dispatch(fetchPost(post.id)));
        } else if (!likeId && localReaction) {
          createLike({
            like: {
              user_id: userId,
              likeable_id: post.id,
              likeable_type: 'Post'
            }
          })(dispatch)
            .then(() => dispatch(fetchPost(post.id)))
        }
      }, 500);
    })
  };
  useEffect(syncLocalAndRemoteReaction, [localReaction]);

  return <aside className="post-likes-and-comments">
    <ul>
      <li
        className={'post-like-button' + (localReaction ? ` post-like-button-clicked-${localReaction}` : '')}
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
