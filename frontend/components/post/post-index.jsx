import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'components/post/post';

const PostIndex = () => {
  const posts = useSelector(state => state.posts);
  const newest = Object.keys(posts).sort((a, b) => (
    new Date(posts[b].published_at) - new Date(posts[a].published_at)
  ));

  return (
    <section className="post-index">
      {
        newest.map(id => {
          const post = posts[id];
          const { poster_id, poster_type } = post;
          return <Post key={id} post={post} poster={{ poster_id, poster_type }}/>
        })
      }
    </section>
  );
};

export default PostIndex;
