import React from 'react';
import { useSelector } from 'react-redux';

const LikeForm = ({ id, className }) => {
  const reaction = useSelector((state) => state.likes[id]);
  return <span className={className + `like-${reaction}`}>
    Like
  </span>
};

export default LikeForm;
