import React, { useState, useEffect, createRef } from 'react';
import ErrorBubble from 'components/ui/error-bubble';

const InputValidator = ({validator, remoteErrors, orient, ...props}) => {
  const [localErrors, setLocalErrors]    = useState([]);
  const [displayError, setDisplayErrors] = useState(false);
  const [modified, setModified]          = useState(false);
  const [clientRects, setClientRects]    = useState(null);

  // Force update on window resize to get new bouding client rect
  useEffect(() => {
    const resetPosition = () => setClientRects(null);
    window.addEventListener('resize', resetPosition);
    return () => window.removeEventListener('resize', resetPosition);
  }, []);

  return <>
    <input {...props} ref={(element) => {
      if (element) {
        setClientRects((prev) => {
          const targetRect = element.getBoundingClientRect();
          const containerRect = element.parentNode.getBoundingClientRect();
          const next = { targetRect, containerRect };
          if (!isEqualDimensions(prev, next)) {
            return next;
          }
          return prev;
        });
      }
    }} />
    {
      !modified &&
      remoteErrors.length > 0 &&
      <ErrorBubble
        message={remoteErrors[0]}
        orient={orient}
        {...clientRects}
      />
    }
  </>
};

const isEqualDimensions = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return false;
  }

  return ['targetRect', 'containerRect'].every((key) => (
    isEqualDimension(obj1[key], obj2[key])
  ));
};

const isEqualDimension = (el1, el2) => {
  if (!el1 || !el2) return false;

  const keys = ['x', 'y', 'width', 'height', 'top', 'right', 'bottom', 'left'];
  return keys.every((key) => el1[key] === el2[key]);
};

export default InputValidator;
