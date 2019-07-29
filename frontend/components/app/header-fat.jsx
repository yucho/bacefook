import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderFat = ({ className, children }) => {
  const logo = useSelector(({ images }) => images['splash-logo']);
  return <header className = {'fat-header' + (className ? ' ' + className : '')}>
    <Link to="/" className="header-logo-wrapper">
      <img className="header-logo" src={logo} alt="Bacefook" />
    </Link>
    {children}
  </header>
};

export default HeaderFat;
