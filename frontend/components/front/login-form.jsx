import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from 'actions/session-actions';

const LoginForm = withRouter(({ className, placeholder, history }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <form className={className}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login({ email_or_phone: user, password }))
          .then(() => history.push('/login'));
      }}
    >
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
});

const handleUpdate = setter => e => setter(e.target.value);

export default LoginForm;
