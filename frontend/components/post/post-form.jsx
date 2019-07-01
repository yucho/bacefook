import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Prompt } from 'react-router-dom'
import Textarea from 'react-textarea-autosize';
import PostFormHeader from 'components/post/post-form-header';
import ModalDarken from 'components/ui/modal-darken';
import PostFormPhotos from 'components/post/post-form-photos';
import { createPost } from 'actions/posts-actions';

const PostForm = ({postable_id = null, postable_type = 'User'}) => {
  const [body, setBody] = useState('');
  const [focus, setFocus] = useState(false);
  const [tab, setTab] = useState(0);
  const [files, setFiles] = useState({});
  const container = useRef(null);
  const dispatch = useDispatch();
  postable_id = postable_id || useSelector(state => state.session.id);

  return (
    <section className={`post-form-container ${focus ? 'post-form-container-focus' : ''}`}
      ref={container} onClick={() => setFocus(true)}>
      <PostFormHeader tab={tab} setTab={setTab} />
      <form className="post-form" onSubmit={(e) => {
        e.preventDefault();
        const post = { post: { body, postable_id, postable_type } };
        if (tab === 1) {
          post['photos'] = Object.keys(files).map((i) => files[i]);
        }
        dispatch(createPost(post));
        setBody('');
        setFiles({});
        setFocus(false);
      }}>
        <div className="post-form-circular-image"/>
        <Textarea onChange={handleUpdate(setBody)} value={body} placeholder="What's on your mind?" />
        <Prompt when={!!body} message="You haven't finished your post yet. Do you want to leave without finishing?" />
        <PostFormPhotos active={tab === 1} files={files} setFiles={setFiles} />
        <fieldset className="post-form-share-button-wrapper">
          <input type="submit" value="Share" className="post-form-share-button" />
        </fieldset>
      </form>
      <ModalDarken activate={focus} deactivate={() => setFocus(false)} element={container} scrollJack={false}/>
    </section>
  );
};

const handleUpdate = (setter) => (e) => setter(e.target.value);

export default PostForm;
