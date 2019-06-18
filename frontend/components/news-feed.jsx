import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsFeed } from 'actions/users-actions';
import Sidebar from 'components/sidebar';
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    if (_.isEmpty(users)) {
      console.log('Oh dear me')
      dispatch(fetchNewsFeed());
    }
  }, []);

  return (
    <main className="main-content-news-feed">
      <Sidebar />
      <section className="main-content-main-section">
        <PostForm />
        <PostIndex />
      </section>
      <aside className="main-content-extra"></aside>
    </main>
  );
};

export default NewsFeed;
