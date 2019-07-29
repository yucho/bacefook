import React from 'react';
import { Link } from 'react-router-dom';

const FooterFat = ({ className }) => {
  return <footer className={'fat-footer' + (className ? ' ' + className : '')}>
    <ul className="fat-footer-locale">
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
    <ul className="fat-footer-nav">
      <li>Sign Up</li>
      <li><Link to='/login'>Log In</Link></li>
      <li><a href="https://github.com/yucho">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/yuchoho/">LinkedIn</a></li>
      <li><a href="https://yuchoho.com/">Creator Website</a></li>
    </ul>
    <small className="fat-footer-copyright">Bacefook &#9728; 2019</small>
  </footer>
};

export default FooterFat;
