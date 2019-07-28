import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsFeed } from 'actions/users-actions';
import Header from 'components/app/header';
import LeftSidebar from 'components/news-feed/left-sidebar';
import RightSidebar from 'components/news-feed/right-sidebar'
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchNewsFeed());
  }, []);

  return <>
      <Header />
      <main className="main-content-news-feed">
        <LeftSidebar />
        <section className="main-content-main-section">
          <PostForm />
          <PostIndex />
        </section>
        <RightSidebar />
    </main>
  </>
};

export default NewsFeed;
