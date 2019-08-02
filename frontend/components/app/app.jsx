import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Splash from 'components/front/splash';
import NewsFeed from 'components/news-feed/news-feed';
import LoginPage from 'components/front/login-page';
import Timeline from 'components/timeline/timeline';

const App = () => {
  const currentUser = useSelector((state) => state.session.id);

  useEffect(() => {
    if (currentUser) {
      document.body.classList.add("logged-in");
    } else {
      document.body.classList.remove("logged-in");
    }
    return () => document.body.classList.remove("logged-in");
  }, [currentUser]);

  return <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/timeline">
      {(arg) => {
        if (!currentUser) {
          return <Redirect to="/" />
        } else if (arg.match.isExact === true) {
          return <Timeline userId={currentUser} />
        }
        return currentUser ? <NewsFeed /> : <Splash />
      }}
    </Route>
    <Route path="/" >
      {currentUser ? <NewsFeed /> : <Splash />}
    </Route>
  </Switch>
};

export default App;
