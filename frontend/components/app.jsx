import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { sessionId } from 'reducers/selectors';
import Splash from 'components/splash';

// Tentative
import { logout } from 'actions/session-actions';

const App = ({ session, match, history }) => {
  const currentUserId = useSelector(sessionId);
  const dispatch = useDispatch();

  if(!currentUserId) {
    return <Splash />
  }

  return (
  <>
    <Route path="/" render={() => (<div>Logged in! <button onClick={() => dispatch(logout())} >Log Out</button></div>)} />
  </>
)};

export default App;
