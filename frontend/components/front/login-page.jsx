import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import FooterFat from 'components/app/footer-fat';
import HeaderFat from 'components/app/header-fat';
import LoginForm from './login-form';
import { login } from 'actions/session-actions';

const LoginPage = withRouter(({ history }) => {
  const loggedIn = !!useSelector((state) => state.session.id);
  if (loggedIn) {
    history.push('/');
  }
  const dispatch = useDispatch();
  return <>
      <HeaderFat />
      <main className="login-page">
        <section className="login-page-form-container">
          <h2>Log Into Bacefook</h2>
          <LoginForm className="login-page-form" isEmbedded={true} />
          <div className="login-page-or-divider"><span>or</span></div>
          <input className="create-new-account" type="submit" value="Create New Account" />
          <input className="demo-login" type="submit" value="Demo Login" onClick={() => {
            dispatch(login({
              email_or_phone: 'photter@hogwarts.com', password: 'hotterhotter'
            }));
          }} />
        </section>
      </main>
      <FooterFat />
    </>
});

export default LoginPage;
