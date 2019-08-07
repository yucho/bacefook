import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import CommentIndex from 'components/comment/comment-index';
import ModalConfirm from 'components/ui/modal-confirm';
import PostLikeComment from './post-like-comment';
import PostStatLikeComment from './post-stat-like-comment';
import PostPhotos from './post-photos';
import UserIcon from 'components/ui/user-icon';
import { destroyPost } from 'actions/posts-actions';
import { appendAccessor } from 'util/context-util';

export const PostShowContext = React.createContext();

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

  return <PostShowContext.Provider value={appendAccessor({ post })}>
    <section className="post-container">
      <section className="post-header">
        <UserIcon className="post-circular-image" userId={poster_id} />
        <span className="post-author">{name}</span>
        {/* <time>{published_at}</time> */}
        <i ref={icon} className="sprite2 post-dropdown-menu-icon" onClick={set(toggle, true)}></i>
        <ul ref={menu} className={menuClass(visible)}>
          {/* <li>Edit...</li> */}
          <li onClick={() => { toggle(false); setOpenDelete(true) }}>Delete...</li>
        </ul>
      </section>
      <article className="post-body">
        <p>{body}</p>
      </article>
      <PostPhotos post={post} />
      <PostStatLikeComment />
      <PostLikeComment />
    </section>
    <ModalConfirm className="modal-confirm-delete-post"
      opts={deleteOpts(post)} open={openDelete} close={set(setOpenDelete, false)}
    />
    <CommentIndex post={post} />
  </PostShowContext.Provider>
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
