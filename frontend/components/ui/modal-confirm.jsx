import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const ModalConfirm = ({ open, close, className, opts }) => {
  const dispatch = useDispatch();
  const modal = useRef(null);
  useEffect(clickOutside(modal, close), []);

  const { title, message, cancel, ok, action } = opts;
  return (
    <dialog ref={modal} open={open} className={appendClass(className)}>
      <header className="modal-confirm-header">{title}</header>
      <section className="modal-confirm-message">{message}</section>
      <menu className="modal-confirm-menu">
        <button className="modal-confirm-cancel" onClick={() => close()}>{cancel}</button>
        <button className="modal-confirm-ok" onClick={() => dispatch(action)}>{ok}</button>
      </menu>
    </dialog>
  );
};

const clickOutside = (element, close) => () => {
  const cb = (e) => {
    if (element.current.contains(e.target)) return;
    close();
  };
  document.body.addEventListener('click', cb);
  return () => document.body.removeEventListener('click', cb);
};

const appendClass = (name) => {
  return 'modal-confirm-container' + (name ? ` ${name}` : '');
};

export default ModalConfirm;
