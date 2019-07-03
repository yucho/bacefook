import React, { useState } from 'react';
import FriendsSuggestion from 'components/news-feed/friends-suggestion';
import LanguageSelection from 'components/news-feed/language-selection';
import Copyright from 'components/news-feed/copyright';

const RideSidebar = () => {
  return <aside className="right-sidebar-container">
    <div className="right-sidebar-sticky">
      <FriendsSuggestion />
      <LanguageSelection />
      <Copyright />
    </div>
  </aside>
};

export default RideSidebar;
