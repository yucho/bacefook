import React, { useState, useEffect } from 'react';
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

  const [state, setState] = useState({
    className: null,
    photoURL: null,
    style: {}
  });
  useEffect(() => {
    setState((prev) => {
      // Check url before query string
      const prevURL = /^(.+\..+)\?.*$/.exec(prev.photoURL);
      const newURL = /^(.+\..+)\?.*$/.exec(photoURL);
      if (prev.className !== className || prev.photoURL !== photoURL) {
        if (!!prevURL && !!newURL && prevURL[1] === newURL[1]) {
          return prev;
        }
        const style = photoURL ? { backgroundImage: `url(${photoURL})` } : {};
        return Object.assign({}, prev, { className, photoURL, style });
      }
      return prev;
    })
  }, [className, photoURL]);

  return <Link to={link}>
    <div
      className={'user-icon' + (state.className ? ` ${state.className}` : '')}
      style={state.style}
    />
  </Link>
};

export default UserIcon;
