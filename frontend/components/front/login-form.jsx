import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions/session-actions';

const LoginForm = ({ className, placeholder }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submit = useCallback(() => dispatch(login({ email_or_phone: user, password })), [user, password]);

  return (
    <form onSubmit={handleSubmit(submit)} className={className}>
      <label>Email or Phone<br />
        <input onChange={handleUpdate(setUser)} type="text" value={user}
          placeholder={placeholder ? 'Email or Phone Number' : ''}/>
      </label>
      <label>Password<br/>
        <input onChange={handleUpdate(setPassword)} type="password" value={password}
          placeholder={placeholder ? 'Password' : ''}/>
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
};

const handleUpdate = setter => e => setter(e.target.value);
const handleSubmit = submitter => e => {
  e.preventDefault();
  submitter();
};

export default LoginForm;
