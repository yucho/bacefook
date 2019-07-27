import React from 'react';

const PostFormHeader = ({ tab, setTab }) => {
  return <header className="post-form-header">
    <h3 onClick={() => setTab(0)} className={tab === 0 ? 'post-form-tab-active' : ''}>
      <i className="sprite2 create-post-icon" />Create Post
      <Triangle active={tab === 0} />
    </h3>
    <Sep />
    <h3 onClick={() => setTab(1)} className={tab === 1 ? 'post-form-tab-active' : ''}>
      <i className="sprite2 photo-video-icon" />Photo/Video
      <Triangle active={tab === 1} />
    </h3>
  </header>
};

const Triangle = ({ active }) => {
  return active ? <div className="post-form-header-active-tab" /> : <></>
};

const Sep = () => <div className="post-form-header-separator" />;

export default PostFormHeader;
