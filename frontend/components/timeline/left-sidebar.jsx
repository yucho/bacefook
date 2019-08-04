import React from 'react';
import Copyright from 'components/app/copyright';
import LanguageSelection from 'components/app/language-selection';

const LeftSidebar = () => {
  return <aside className="timeline-left-sidebar">
    <nav className="timeline-left-sidebar-sticky"> 
      <LanguageSelection />
      <Copyright />
    </nav>
  </aside>
};

export default LeftSidebar;
