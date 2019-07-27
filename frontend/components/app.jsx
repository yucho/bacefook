import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Splash from 'components/front/splash';
import NewsFeed from 'components/news-feed/news-feed';
import Header from 'components/header';

const App = ({ session, match, history }) => {
  const currentUser = useSelector((state) => state.session.id);

  useEffect(() => {
    if (currentUser) {
      document.body.classList.add("logged-in");
    } else {
      document.body.classList.remove("logged-in");
    }
    return () => document.body.classList.remove("logged-in");
  }, [currentUser]);

  return <>
    {currentUser && <Header />}
    <Route path="/" >
      {currentUser ? <NewsFeed /> : <Splash />}
    </Route>
  </>
};

export default App;
