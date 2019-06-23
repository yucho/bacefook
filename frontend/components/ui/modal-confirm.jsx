import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const ModalConfirm = ({ open, close, className, opts }) => {
  const dispatch = useDispatch();
  const modal = useRef(null);
  useEffect(clickOutside(modal, close), []);
  useEffect(darkenBackground(open), [open]);
  useEffect(scrollJack(open), [open]);

  const { title, message, cancel, ok, action } = opts;
  return <>
    <dialog ref={modal} open={open} className={appendClass(className)}>
      <header className="modal-confirm-header">
        <span>{title}</span>
        <i className="sprite4 modal-confirm-x" onClick={() => close()} />
      </header>
      <section className="modal-confirm-message">{message}</section>
      <menu className="modal-confirm-menu">
        <button className="modal-confirm-cancel" onClick={() => close()}>{cancel}</button>
        <button className="modal-confirm-ok" onClick={() => dispatch(action)}>{ok}</button>
      </menu>
    </dialog>
  </>
};

const clickOutside = (element, close) => () => {
  const cb = (e) => {
    if (element.current.contains(e.target)) return;
    close();
  };
  $('body').on('click', cb);
  return () => $('body').off('click', cb);
};

const $darkDiv = $('<div class="modal-confirm-dark-overlay"></div>');
const darkenBackground = (open) => () => {
  open ? $('body').append($darkDiv) : $darkDiv.remove();
  return () => $darkDiv.remove();
};

const className = 'stop-scrolling';
const cb = (e) => e.preventDefault();
const scrollJack = (open) => () => {
  const $body = $('body');
  const close = () => {
    $body.removeClass(className);
    $body.off('touchmove', cb);
  };
  if (open) {
    $body.addClass(className);
    $body.on('touchmove', cb);
  } else {
    close();
  }
  return close;
};

const appendClass = (name) => {
  return 'modal-confirm-container' + (name ? ` ${name}` : '');
};

export default ModalConfirm;
