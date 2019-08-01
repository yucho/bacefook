import React from 'react';

const ErrorBubble = ({ message, orient, targetRect, containerRect }) => {
  if (!orient) return <></>

  const appendClass = `error-bubble-${orient}`;
  return <div
    className={`error-bubble ${appendClass}`}
    ref={(element) => {
      if (!element) return;

      element.setAttribute('style', '');
      if (!containerRect || !targetRect) return;

      const bubbleRect = element.getBoundingClientRect();
      if (!bubbleRect) return;
      
      let top = '', right = '', bottom = '', left = '';
      if (orient === 'top') {
        top = `${targetRect.y - containerRect.y - bubbleRect.height - 24}px`;
      }
      if (orient === 'right') {
        left = `${targetRect.x - containerRect.x + targetRect.width + 24}px`;
      }
      if (orient === 'bottom') {
        top = `${targetRect.y - containerRect.y + targetRect.height + 24}px`;
      }
      if (orient === 'left') {
        left = `${- bubbleRect.width + targetRect.x - containerRect.x - 24}px`;
      }
      if (orient === 'top' || orient === 'bottom') {
        left = `${targetRect.x - containerRect.x + targetRect.width / 2 - bubbleRect.width / 2}px`;
      }
      if (orient === 'right' || orient === 'left') {
        top = `${targetRect.y - containerRect.y + targetRect.height / 2 - bubbleRect.height / 2}px`;
      }
      element.style.top = top;
      element.style.right = right;
      element.style.bottom = bottom;
      element.style.left = left;
    }}
    children={message}
  />
};

export default ErrorBubble;
