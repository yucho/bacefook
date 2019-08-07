import React from 'react';
import { Link } from 'react-router-dom';

const UserIcon = ({ className, userId = null }) => {
  const link = !userId ? '/timeline' : `/timeline/${userId}`;

  return <Link to={link}>
    <div className={'user-icon' + (className ? ` ${className}` : '')} />
  </Link>
};

export default UserIcon;
