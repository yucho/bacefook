import React      from 'react';
import FooterFat  from 'components/app/footer-fat';
import HeaderFat  from 'components/app/header-fat';
import Icon       from 'components/ui/icon';
import LoginForm  from 'components/front/login-form';
import SignupForm from 'components/front/signup-form';

const Splash = () => {
  return <>
    <HeaderFat children={<LoginForm className="login-form" />} />
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
    <FooterFat />
  </>
};

export default Splash;
