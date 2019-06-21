import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const PostShow = ({ poster, post }) => {
  const { poster_id, poster_type } = poster;
  const { body, published_at } = post;
  const users = useSelector(state => state.users);

  const [menuVisible, setMenuVisible] = useState(false);
  const icon = useRef(null);
  const menu = useRef(null);

  const name = (() => {
    switch(poster_type){
      case 'User':
        const { first_name, last_name } = users[poster_id];
        return `${first_name} ${last_name}`;
      default:
        return "Unknown Poster";
    }
  })();

  const menuElement = <>
    <i ref={icon} className="sprite2 post-dropdown-menu-icon" onClick={() => setMenuVisible(true)}></i>
    <ul ref={menu} className={menuClass(menuVisible)}>
      <li>Edit...</li>
      <li>Delete...</li>
    </ul>
  </>

  useEffect(() => {
    const cb = hideMenu(setMenuVisible, icon, menu);
    document.body.addEventListener('click', cb);
    return () => document.body.removeEventListener(cb);
  }, []);

  return (
    <section className="post-container">
      <section className="post-header">
        <div className="post-circular-image" />
        <span className="post-author">{name}</span>
        {/* <time>{published_at}</time> */}
        {menuElement}
      </section>
      <article className="post-body">
        <p>{body}</p>
      </article>
      <aside className="post-likes-and-comments">
        <ul>
          <li><i className="sprite post-like-logo"></i><span>Like</span></li>
          <li><i className="sprite2 post-comment-logo"></i><span>Comment</span></li>
        </ul>
      </aside>
      <section className="post-comments">
      </section>
    </section>
  );
};

const hideMenu = (setVisible, icon, menu) => (e) => {
  if (icon.current.contains(e.target) || menu.current.contains(e.target)) {
    return;
  }
  return setVisible(false);
};

const menuClass = (visible) => {
  let className = "post-dropdown-menu-list";
  if(visible) className += " post-dropdown-menu-list-visible";
  return className;
};

export default PostShow;
