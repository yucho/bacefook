import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from 'components/front/login-form';
import SignupForm from 'components/front/signup-form';
import Icon from 'components/ui/icon';

const Splash = props => {
  const logo = useSelector(({images}) => images['splash-logo']);

  return (
    <>
      <header className="splash-outer splash-header">
        <img className="splash-logo" src={logo} alt="Bacefook" />
        <LoginForm className="login-form" />
      </header>
      <main className="splash-outer splash-main">
        <section className="splash-welcome">
          <h1>Connect with wriends and the <br/>forld around you on Bacefook.</h1>
          <ul>
            <li>
              <Icon name="chrome_reader_mode" appendClasses="md_48" />
              <span><span className="splash-welcome-emphasis">See photos and updates</span> from
              friends in News Feed.</span>
            </li>
            <li>
              <Icon name="stars" appendClasses="md_48" />
              <span><span className="splash-welcome-emphasis">Share what's new</span> in
              your life on your Timeline.</span>
            </li>
            <li>
              <Icon name="search" appendClasses="md_48" />
              <span><span className="splash-welcome-emphasis">Find more</span> of
              what you're looking for with Bacefook Search.</span>
            </li>
          </ul>
        </section>
        <aside className="signup-form-container">
          <SignupForm />
        </aside>
      </main>
      <footer className="splash-outer splash-footer">
        <ul className="splash-footer-locale">
          <li>English (US)</li>
          <li>Español</li>
          <li>Français (France)</li>
          <li>中文(简体)</li>
          <li>العربية</li>
          <li>Português (Brasil)</li>
          <li>Italiano</li>
          <li>한국어</li>
          <li>Deutsch</li>
          <li>हिन्दी</li>
          <li>日本語</li>
        </ul>
        <ul className="splash-footer-nav">
          <li>Sign Up</li>
          <li>Log In</li>
          <li><a href="https://github.com/yucho">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/yuchoho/">LinkedIn</a></li>
          <li><a href="https://yuchoho.com/">Creator Website</a></li>
        </ul>
        <small className="splash-footer-copyright">Bacefook &#9728; 2019</small>
      </footer>
    </>
  )
};

export default Splash;
