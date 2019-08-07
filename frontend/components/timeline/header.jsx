import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ userId }) => {
  const imageURL = useSelector((state) => {
    const user = state.users[userId];
    if (!user) return null;

    const photo = state.photos[user.profile_photo];
    if (!photo) return null;

    return photo.url;
  });
  const style = !imageURL ? {} : {backgroundImage: `url('${imageURL}')`};

  return <section className="timeline-header">
    <div className="timeline-cover-photo">
      <button className="update-cover-photo">Update Cover Photo</button>
    </div>
    <div className="timeline-profile-photo" style={style}>
      <label className="update-profile-photo">
        <input type="file" style={{display: 'none'}}
          // onChange={}
        />
      </label>
    </div>
    <nav className="timeline-navbar"></nav>
  </section>
};

export default Header;
