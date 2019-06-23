import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return <section className="right-sidebar-copyright-container">
    <p>
      Bacefook © {new Date().getFullYear()} - presented
      by <a href="https://yuchoho.com">Yucho Ho</a>
      . Connect with me
      on <a href="https://www.linkedin.com/in/yuchoho">LinkedIn</a>
      &nbsp;or <a href="https://github.com/yucho">GitHub</a>
      . Inspired by Facebook
    </p>
  </section>
};

export default Copyright;
