import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const [body, setBody] = useState('');
  const userId = useSelector(state => state.session.id);

  return (
    <section className="post-form-container" >
      <h3>Create Post</h3>
      <form className="post-form">
        <div className="post-form-circular-image"/>
        <input onChange={handleUpdate(setBody)} type="text" value={body}
          placeholder="What's on your mind?"
        />
        <input type="submit" value="Share" className="post-form-share-button" />
      </form>
    </section>
  );
};

const handleUpdate = setter => e => setter(e.target.value);

export default PostForm;
