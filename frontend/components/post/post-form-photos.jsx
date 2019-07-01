import React, { useState, useEffect } from 'react';

const PostFormPhotos = ({ active }) => {
  const [files, setFiles] = useState({});
  return <div className={`post-form-photos ${active ? 'active' : ''}`}>
    {Object.keys(files).map((key) => <PhotoPreview key={key} file={files[key]} />)}
    <input type="file" onChange={(e) => {
        let counter = Object.keys(files).length;
        const newFiles = {};
        for (const file of e.target.files) {
          newFiles[counter++] = file;
        }
        setFiles(Object.assign({}, files, newFiles));
      }}
      multiple id="post-form-photos-input-file" style={{display: 'none'}} />
    <label className="post-form-photos-input-file"
      htmlFor="post-form-photos-input-file">&#xFF0B;</label>
  </div>
};

const PhotoPreview = ({ file }) => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setPath(e.target.result);
  });
  return <div className="post-form-photos-thumb">
    {path ? <img src={path} /> : <div className="loading-circle-01" />}
  </div>
};

export default PostFormPhotos;
