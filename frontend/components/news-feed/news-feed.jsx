import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsFeed } from 'actions/news-feed-actions';
import Header from 'components/app/header';
import LeftSidebar from 'components/news-feed/left-sidebar';
import RightSidebar from 'components/news-feed/right-sidebar'
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const posts = useSelector(state => state.posts);

  const [prevTimestamp, setPrevTimestamp] = useState(null);
  const [fetchedEnoughPosts, setFetchedEnoughPosts] = useState(true);
  const [scrollBottomReached, setScrollBottomReached] = useState(true);

  useEffect(() => {
    if (fetchedEnoughPosts && scrollBottomReached) {
      setFetchedEnoughPosts(false);
      setScrollBottomReached(false);
      dispatch(fetchNewsFeed(prevTimestamp))
        .then((res) => {
          if (res.posts.length >= 10) {
            const timestamp = res.posts[res.posts.length - 1].published_at;
            setPrevTimestamp(timestamp);
            setFetchedEnoughPosts(true);
          }
        });
    }
  }, [fetchedEnoughPosts, scrollBottomReached, prevTimestamp]);

  const infiniteScroll = () => {
    const cb = (e) => {
      if (window.scrollY + window.innerHeight >= document.body.clientHeight - 100) {
        setScrollBottomReached(true);
      }
    };
    document.addEventListener('scroll', cb);
    return () => document.removeEventListener('scroll', cb);
  };
  useEffect(infiniteScroll, []);

  return <>
    <Header />
    <main className="main-content-news-feed">
      <LeftSidebar />
      <section className="main-content-main-section">
        <PostForm />
        <PostIndex posts={posts}  />
        {/* <div className="loading-posts" /> */}
      </section>
      <RightSidebar />
    </main>
  </>
};

export default NewsFeed;
