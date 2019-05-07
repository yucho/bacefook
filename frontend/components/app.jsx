import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { sessionId } from 'reducers/selectors';
import Splash from 'components/splash';

const App = ({ session, match, history }) => {
  const currentUserId = useSelector(sessionId);

  if(!currentUserId) {
    return <Splash />
  }

  return (
  <>
    <Route path="/" render={() => (<div>Logged in</div>)} />
  </>
)};

export default App;
