import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'actions/session-actions';

const Header = props => {
  const logo = useSelector(({ images }) => images['header-logo']);
  const dispatch = useDispatch();
  const submit = useCallback(() => dispatch(logout()), []);
  return (
    <header className="main-header">
      <nav className="main-header-items">
        <Link to="/" class="main-header-icon-wrapper">
          <img src={logo} className="main-header-icon" />
        </Link>
        <button onClick={handleSubmit(submit)} className="logout-button">Log Out</button>
      </nav>
    </header>
  );
};

const handleSubmit = submitter => e => {
  e.preventDefault();
  submitter();
};

export default Header;
