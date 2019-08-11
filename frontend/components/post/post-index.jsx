import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post-show';

const PostIndex = ({ posts, postsArray = null }) => {
  const newest = postsArray || Object.keys(posts).sort((a, b) => (
    new Date(posts[b].published_at) - new Date(posts[a].published_at)
  ));

  return (
    <section className="post-index">
      {
        newest.filter((id) => {
          const photoDescription = posts[id].describing;
          if (photoDescription && !posts[id].photos.includes(photoDescription)) {
            return false;
          }
          return true;
        }).map((id) => {
          const post = posts[id];
          const { poster_id, poster_type } = post;
          return <Post key={id} post={post} poster={{ poster_id, poster_type }}/>
        })
      }
    </section>
  );
};

export default PostIndex;
