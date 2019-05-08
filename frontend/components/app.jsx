import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { sessionId } from 'reducers/selectors';
import Splash from 'components/splash';
import Header from 'components/header';

// Tentative
import { logout } from 'actions/session-actions';

const App = ({ session, match, history }) => {
  const currentUserId = useSelector(sessionId);
  const dispatch = useDispatch();

  if(!currentUserId) {
    document.body.classList.remove("logged-in");
    return <Splash />
  }else {
    document.body.classList.add("logged-in");
  }

  return (
  <>
    <Header />
    <Route path="/" >
      <main className="main-content-news-feed">
      </main>
    </Route>
  </>
)};

export default App;
