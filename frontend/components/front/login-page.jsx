import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './login-form';

const LoginPage = withRouter(({ history }) => {
  const loggedIn = !!useSelector((state) => state.session.id);
  if (loggedIn) {
    history.push('/');
  }

  return <>
      <LoginForm />
    </>
});

export default LoginPage;
