import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from 'components/login-form';
import SignupForm from 'components/signup-form';
import Icon from 'components/icon';

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
              what you're looking for with Facebook Search.</span>
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
          <li><Link to="/">Español</Link></li>
          <li><Link to="/">Français (France)</Link></li>
          <li><Link to="/">中文(简体)</Link></li>
          <li><Link to="/">العربية</Link></li>
          <li><Link to="/">Português (Brasil)</Link></li>
          <li><Link to="/">Italiano</Link></li>
          <li><Link to="/">한국어</Link></li>
          <li><Link to="/">Deutsch</Link></li>
          <li><Link to="/">हिन्दी</Link></li>
          <li><Link to="/">日本語</Link></li>
        </ul>
        <ul className="splash-footer-nav">
          <li><Link to="/">Sign Up</Link></li>
          <li><Link to="/">Log In</Link></li>
          <li><Link to="/">Messenger</Link></li>
          <li><Link to="/">Facebook Lite</Link></li>
          <li><Link to="/">Find Friends</Link></li>
          <li><Link to="/">People</Link></li>
          <li><Link to="/">Profiles</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/">Page Categories</Link></li>
          <li><Link to="/">Places</Link></li>
          <li><Link to="/">Games</Link></li>
          <li><Link to="/">Locations</Link></li>
          <li><Link to="/">Marketplace</Link></li>
          <li><Link to="/">Groups</Link></li>
          <li><Link to="/">Instagram</Link></li>
          <li><Link to="/">Local</Link></li>
          <li><Link to="/">Fundraisers</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Create Ad</Link></li>
          <li><Link to="/">Create Page</Link></li>
          <li><Link to="/">Developers</Link></li>
          <li><Link to="/">Careers</Link></li>
          <li><Link to="/">Privacy</Link></li>
        </ul>
        <small className="splash-footer-copyright">Bacefook &#9728; 2019</small>
      </footer>
    </>
  )
};

export default Splash;
