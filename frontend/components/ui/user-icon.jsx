import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserIcon = ({ className, userId = null }) => {
  const link = !userId ? '/timeline' : `/timeline/${userId}`;

  const photoURL = useSelector((state) => {
    const user = state.users[userId];
    if (!user) return null;

    const photo = state.photos[user.profile_photo];
    if (!photo) return null;

    return photo.url;
  });
  const style = photoURL ? { backgroundImage: `url(${photoURL})` } : {};

  return <Link to={link}>
    <div className={'user-icon' + (className ? ` ${className}` : '')} style={style} />
  </Link>
};

export default UserIcon;
