import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import UserIcon from 'components/ui/user-icon';

const CommentForm = ({post}) => {
  const user = useSelector((state) => state.users[state.session.id]);
  const [text, setText] = useState('');
  return <section className="comment-form-container">
    <UserIcon className="comment-form-user-icon" user={user} />
    <Textarea className="comment-form-textarea" value={text} 
      placeholder="Write a comment..." onKeyDown={submit(text)} onChange={update(setText)} />
  </section>;
};

const submit = () => (e) => {
  // implement backend first.
};

const update = (setText) => (e) => {
  setText(e.target.value);
};

export default CommentForm;
