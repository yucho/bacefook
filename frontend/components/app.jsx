import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Splash from 'components/splash';
import NewsFeed from 'components/news-feed';
import Header from 'components/header';

const App = ({ session, match, history }) => {
  const currentUser = useSelector((state) => state.session.id);

  if (!currentUser) {
    document.body.classList.remove("logged-in");
    return <Splash />
  }

  document.body.classList.add("logged-in");
  return (
    <>
      <Header />
      <Route path="/" >
        <NewsFeed />
      </Route>
    </>
  );
};

export default App;
