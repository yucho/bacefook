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
        const pathname = arg.location.pathname;
        if (!currentUser) {
          return <Redirect to="/" />
        } else if (arg.match.isExact === true) {
          return <Timeline userId={currentUser} />
        } else if (pathname.startsWith('/timeline/')) {
          const userId = parseInt(pathname.slice(10));
          return !isNaN(userId) ? <Timeline userId={userId} /> : <Redirect to="/" />
        }
        return <Redirect to="/" />
      }}
    </Route>
    <Route path="/" >
      {currentUser ? <NewsFeed /> : <Splash />}
    </Route>
  </Switch>
};

export default App;
