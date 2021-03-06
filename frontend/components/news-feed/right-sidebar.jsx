import React, { useState } from 'react';
import FriendsSuggestion from 'components/news-feed/friends-suggestion';
import LanguageSelection from 'components/app/language-selection';
import Copyright from 'components/app/copyright';

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
