import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from 'components/login-form';
import SignupForm from 'components/signup-form';

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
            <li><span className="splash-welcome-emphasis">See photos and updates</span> from friends in News Feed.</li>
            <li><span className="splash-welcome-emphasis">Share what's new</span> in your life on your Timeline.</li>
            <li><span className="splash-welcome-emphasis">Find more</span> of what you're looking for with Facebook Search.</li>
          </ul>
        </section>
        <aside className="signup-form-container">
          <SignupForm />
        </aside>
      </main>
      <footer className="splash-outer splash-footer">
        <ul className="splash-footer-locale">
          <li>English (US)</li>
        </ul>
        <ul className="splash-footer-nav">
          <li><Link to="/">Sign Up</Link></li>
          <li><Link to="/">Log In</Link></li>
        </ul>
        <small className="splash-footer-copyright">Bacefook &#9728; 2019</small>
      </footer>
    </>
  )
};

export default Splash;
