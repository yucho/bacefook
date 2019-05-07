import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { sessionId } from 'reducers/selectors';

const App = ({ session, match, history }) => {
  const currentUserId = useSelector(sessionId);
  if(!currentUserId) {
    return(
      <>
        <header>Navbar and login form here</header>
        <div>Sign up form here</div>
      </>
    )
  }
  
  return (
  <>
    <Route path="/" render={() => (<div>
      Logged in:
    </div>)} />
  </>
)};

export default App;
