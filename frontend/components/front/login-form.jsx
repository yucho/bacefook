import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from 'actions/session-actions';
import InputValidator from 'components/form/input-validator';

const LoginForm = withRouter(({ className, isEmbedded, history }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const errorText = useSelector((state) => {
    try {
      return state.errors.session.response.errors
    } catch {
      return null
    }
  });
  const errorsEmailOrPhone = [];
  const errorsPassword     = [];
  if (errorText) {
    const errors = errorText.split(', ');
    for (const error of errors) {
      if (error.startsWith('Email or phone')) {
        errorsEmailOrPhone.push(error);
      } else if (error.startsWith('Password')) {
        errorsPassword.push(error);
      }
    }
  }

  return (
    <form className={className}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login({ email_or_phone: user, password }))
          .then(() => history.push('/login'));
      }}
    >
      <label htmlFor="login-form-email-or-phone">
        {!isEmbedded && <>Email or Phone<br /></>}
      </label>
      <InputValidator
        id="login-form-email-or-phone"
        type="text"
        value={user}
        onChange={handleUpdate(setUser)}
        placeholder={!!isEmbedded ? 'Email or Phone Number' : ''}
        remoteErrors={errorsEmailOrPhone}
        orient={!!isEmbedded ? 'right' : ''}
      />
      <label htmlFor="login-form-password">
        {!isEmbedded && <>Password<br /></>}
      </label>
      <InputValidator
        id="login-form-password"
        type="password"
        value={password}
        onChange={handleUpdate(setPassword)}
        placeholder={!!isEmbedded ? 'Password' : ''}
        remoteErrors={errorsPassword}
        orient={!!isEmbedded ? 'right' : ''}
      />
      <input type="submit" value="Log In" />
    </form>
  );
});

const handleUpdate = setter => e => setter(e.target.value);

export default LoginForm;
