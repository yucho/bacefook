import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderFat = ({ className, children }) => {
  const logo = useSelector(({ images }) => images['splash-logo']);
  return <header className = {'fat-header' + (className ? ' ' + className : '')}>
    <div className="header-logo-wrapper">
      <Link to="/"><img className="header-logo" src={logo} alt="Bacefook" /></Link>
    </div>
    {children}
  </header>
};

export default HeaderFat;
