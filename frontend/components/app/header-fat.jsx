import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearSessionError } from 'actions/session-actions';

const HeaderFat = ({ className, children }) => {
  const dispatch = useDispatch();
  const logo = useSelector(({ images }) => images['splash-logo']);
  return <header className = {'fat-header' + (className ? ' ' + className : '')}>
    <div className="header-logo-wrapper">
      <Link to="/" onClick={() => dispatch(clearSessionError())}><img className="header-logo" src={logo} alt="Bacefook" /></Link>
    </div>
    {children}
  </header>
};

export default HeaderFat;
