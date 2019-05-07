import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from 'components/login-form';

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
          <h1>Connect with wriends and the forld around you on Bacefook.</h1>
          <ul>
            <li><span className="splash-welcome-emphasis">See photos and updates</span> from friends in News Feed.</li>
            <li><span className="splash-welcome-emphasis">Share what's new</span> in your life on your Timeline.</li>
            <li><span className="splash-welcome-emphasis">Find more</span> of what you're looking for with Facebook Search.</li>
          </ul>
        </section>
        <aside className="signup-form">
          <h1>Create a New Account</h1>
          <p>It’s free and always will be.</p>
        </aside>
      </main>
      <footer className="splash-outer splash-footer">
        <ul className="splash-footer-nav">
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </footer>
    </>
  )
};

export default Splash;
