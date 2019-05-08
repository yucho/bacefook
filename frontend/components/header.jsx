import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'actions/session-actions';

const Header = props => {
  const dispatch = useDispatch();
  const submit = useCallback(() => dispatch(logout()), []);
  return (
    <header className="main-header">
      <nav className="main-header-items">
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
