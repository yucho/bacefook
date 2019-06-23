import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ModalConfirm from 'components/ui/modal-confirm';
import { destroyPost } from 'actions/posts-actions';

const PostShow = ({ poster, post }) => {
  const { poster_id, poster_type } = poster;
  const { body, published_at } = post;
  const users = useSelector(state => state.users);

  const [visible, toggle] = useState(false);
  const icon = useRef(null);
  const menu = useRef(null);

  const name = (() => {
    switch(poster_type){
      case 'User':
        const { first_name, last_name } = users[poster_id];
        return `${first_name} ${last_name}`;
      default:
        return 'Unknown Author';
    }
  })();

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(dropdown(toggle, [icon, menu]), []);

  return <section className="post-container">
    <section className="post-header">
      <div className="post-circular-image" />
      <span className="post-author">{name}</span>
      {/* <time>{published_at}</time> */}
      <i ref={icon} className="sprite2 post-dropdown-menu-icon" onClick={set(toggle, true)}></i>
      <ul ref={menu} className={menuClass(visible)}>
        <li>Edit...</li>
        <li onClick={() => { toggle(false); setOpenDelete(true) }}>Delete...</li>
      </ul>
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
    <ModalConfirm className="modal-confirm-delete-post"
      opts={deleteOpts(post)} open={openDelete} close={set(setOpenDelete, false)}
    />
  </section>
};

const dropdown = (toggle, elements) => () => {
  const cb = hide(toggle, elements);
  document.body.addEventListener('click', cb);
  return () => document.body.removeEventListener('click', cb);
};

const set = (setter, value) => () => setter(value);

const hide = (toggle, elements) => (e) => {
  for(const el of elements) { if (el.current.contains(e.target)) return; }
  toggle(false);
};

const menuClassName = "post-dropdown-menu-list";
const menuClass = (visible) => (
  visible ? `${menuClassName} post-dropdown-menu-list-visible` : menuClassName
);

const editOpts = ({id}) => {};

const deleteOpts = (post) => ({
  action: destroyPost(post),
  title: 'Delete',
  message: 'Are you sure you want to eternally eradicate this post for good?',
  cancel: 'Cancel',
  ok: 'Delete'
});

export default PostShow;
