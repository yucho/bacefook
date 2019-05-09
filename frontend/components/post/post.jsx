import React from 'react';
import { useSelector } from 'react-redux';

const PostShow = ({ poster, post }) => {
  const { poster_id, poster_type } = poster;
  const { body, published_at } = post;
  const users = useSelector(state => state.users)

  const name = (() => {
    switch(poster_type){
      case 'User':
        const { first_name, last_name } = users[poster_id];
        return `${first_name} ${last_name}`;
      default:
        return "Unknown Poster";
    }
  })();

  return (
    <section className="post-container">
      <section className="post-header">
        <img src="" width="20px" height="20px" />
        <span className="post-author">{name}</span>
        <time>{published_at}</time>
      </section>
      <article className="post-body">
        <p>{body}</p>
      </article>
      <aside className="post-likes-and-comments">
        <ul>
          <li>Like</li>
          <li>Comment</li>
        </ul>
      </aside>
      <section className="post-comments">
      </section>
    </section>
  );
};

export default PostShow;
