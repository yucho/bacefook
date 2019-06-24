import React, { useEffect } from 'react';

const ModalDarken = ({ activate, deactivate, element, scrollJack }) => {
  useEffect(clickOutside(element, deactivate), []);
  useEffect(darkenBackground(activate), [activate]);
  return <></>
};

const clickOutside = (element, stop) => () => {
  const cb = (e) => { if (!element.current.contains(e.target)) stop(false) };
  $('body').on('click', cb);
  return () => $('body').off('click', cb);
};

const $div = $('<div class="modal-dark-overlay"></div>');
const darkenBackground = (start) => () => {
  const $body = $('body');
  start ? $body.append($div) : $div.remove();
  return () => $div.remove();
};

export default ModalDarken;
