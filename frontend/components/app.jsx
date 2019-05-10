import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { sessionId } from 'reducers/selectors';
import Splash from 'components/splash';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';

const App = ({ session, match, history }) => {
  const currentUserId = useSelector(sessionId);

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
        <Sidebar />
        <section className="main-content-main-section">
          <PostForm />
          <PostIndex />
        </section>
        <aside className="main-content-extra"></aside>
      </main>
    </Route>
  </>
)};

export default App;
