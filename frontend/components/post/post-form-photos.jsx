import React, { useState } from 'react';

const PostFormPhotos = () => {
  const [photos, addPhoto] = useState([]);
  return <div className="post-form-photos">
    {/* {photos.map((photo) => {
      <div key={photo}></div>
    })} */}
    <input type="file" onChange={update(photos, addPhoto)} 
      id="post-form-photos-input-file" style={{display: 'none'}} />
    <label className="post-form-photos-input-file"
      htmlFor="post-form-photos-input-file">&#xFF0B;</label>
  </div>
};

const update = (photos, addPhoto) => (e) => {
  console.log(e.target.value)
  addPhoto([...photos, e.target.value]);
};

export default PostFormPhotos;
