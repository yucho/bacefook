import _ from 'lodash';
import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { PostShowContext } from './post-show';

const PostNumLikes = () => {
  const post = useContext(PostShowContext).post;
  const localReaction = useContext(PostShowContext).getCtxData().localReaction;

  const [likers, setLikers] = useState(null);
  const likes = useSelector((state) => state.likes);
  const userId = useSelector((state) => state.session.id);
  const localLikes = post.likes.map((id) => likes[id])
    .filter((like) => !!like && like.user_id !== userId);

  const sampleLikers = () => setLikers(_.sampleSize(localLikes, 2));
  if (!likers || !likers.every(({ id }) => !!likes[id])) {
    sampleLikers();
  }

  const users = useSelector((state) => state.users);
  const names = likers ? likers.map((liker) => {
    const user = users[liker.user_id];
    return `${user.first_name} ${user.last_name}`;
  }).filter((user) => !!user) : [];
  const numOthers = localLikes.length - names.length;
  const shouldDisplay = !!localReaction || !!names.length || !!numOthers;
  return shouldDisplay && <aside className="post-num-likes">
    <span className="post-num-likes-icons">
      <i className="sprite post-num-likes-icon post-num-likes-icon-like" />
    </span>
    <span className="post-num-likes-num">
      {!!localReaction && 'You'}
      {!!localReaction && !!names.length && ', '}
      {!!names.length && names.join(', ')}
      {!!numOthers && `, and ${numOthers} others`}
    </span>
  </aside>
};

export default PostNumLikes;
