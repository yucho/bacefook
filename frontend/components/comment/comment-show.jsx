import React, { useState, useEffect, useRef } from 'react';
import UserIcon from 'components/ui/user-icon';
import ModalConfirm from 'components/ui/modal-confirm';
import { destroyComment } from 'actions/comments-actions';

const CommentShow = ({ comment }) => {
  const [isMenu, showMenu] = useState(false);
  const [isIcon, showIcon] = useState(false);
  const [isDelete, showDelete] = useState(false);
  const icon = useRef(null);
  useEffect(() => {
    const hide = (e) => {
      if(!icon.current.contains(e.target)) {
        showMenu(false);
        showIcon(false);
      }
    };
    document.body.addEventListener('click', hide);
    return () => document.body.removeEventListener('click', hide);
  }, []);
  return <section className="comment-show-container"
    onMouseMove={() => showIcon(true)}
    onMouseLeave={() => {if (!isMenu) showIcon(false)}}
  >
    <UserIcon className="comment-show-user-icon" />
    <span className="comment-show-comment">{comment.body}</span>
    <i ref={icon} className={`sprite comment-menu-icon ${isIcon ? 'comment-menu-icon-active' : ''}`}
      onClick={() => showMenu(true)}>
      <ul className={`comment-show-menu ${isMenu ? 'comment-show-menu-active' : ''}`}>
        <li onClick={() => { showMenu(false); showIcon(false); showDelete(true)}}>Delete...</li>
      </ul>
    </i>
    <ModalConfirm className="modal-confirm-delete-comment"
      opts={deleteOpts(comment)} open={isDelete} close={() => showDelete(false)}
    />
  </section>
};

const deleteOpts = (comment) => ({
  action: destroyComment(comment),
  title: 'Delete',
  message: 'Are you sure you want to delete this comment?',
  cancel: 'Cancel',
  ok: 'Delete'
});

export default CommentShow;
