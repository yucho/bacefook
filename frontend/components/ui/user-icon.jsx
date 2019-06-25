import React from 'react';

const UserIcon = ({ className }) => {
  return <div className={'user-icon' + (className ? ` ${className}` : '')} />
};

export default UserIcon;
