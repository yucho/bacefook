import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => (
  <nav className="main-content-sidebar">
    <ul>
      <Link to="/"><li>
        <i className="sprite2 icon-newsfeed" />News Feed
      </li></Link>
        <a href="https://www.linkedin.com/in/yuchoho/"><li>
        <i className="sprite5 icon-linkedin" />LinkedIn
      </li></a>
      <a href="https://github.com/yucho"><li>
        <i className="sprite5 icon-github" />GitHub
      </li></a>
    <a href="https://yuchoho.com/"><li>
        <i className="sprite5 icon-homepage" />Creator Website
      </li></a>
    </ul>
  </nav>
);

export default LeftSidebar;
