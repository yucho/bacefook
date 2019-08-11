import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/app/header';
import LeftSiderbar from 'components/timeline/left-sidebar';
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';
import TimelineHeader from 'components/timeline/header';
import LoadingPosts from 'components/ui/loading-posts';
import { fetchTimeline } from 'actions/timeline-actions';

const Timeline = ({ userId }) => {
  const posts = useSelector((state) => state.posts);
  const filteredPostIds = Object.keys(posts).filter((id) => {
    if (posts[id].poster_type === 'User' && posts[id].poster_id === userId) {
      return true;
    } else if (posts[id].postable_type === 'User' && posts[id].postable_id === userId) {
      return true;
    }
    return false;
  });
  const filteredPosts = {};
  for (const id of filteredPostIds) {
    filteredPosts[id] = posts[id];
  }

  const dispatch = useDispatch();
  const [prevTimestamp, setPrevTimestamp] = useState(null);
  const [fetchedEnoughPosts, setFetchedEnoughPosts] = useState(true);
  const [scrollBottomReached, setScrollBottomReached] = useState(true);
  const [displayLoadingCubes, setDisplayLoadingCubes] = useState(false);

  useEffect(() => {
    if (fetchedEnoughPosts && scrollBottomReached) {
      setFetchedEnoughPosts(false);
      setScrollBottomReached(false);
      setDisplayLoadingCubes(true);
      dispatch(fetchTimeline(userId, prevTimestamp))
        .then((res) => {
          if (!res.posts) {
            setDisplayLoadingCubes(false);
            return;
          }
          if (res.posts.length >= 10) {
            const timestamp = res.posts[res.posts.length - 1].published_at;
            setPrevTimestamp(timestamp);
            setFetchedEnoughPosts(true);
            setDisplayLoadingCubes(false);
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
    <section className="timeline-container">
      <TimelineHeader userId={userId} />
      <LeftSiderbar />
      <section className="timeline-content">
        <PostForm postable_id={userId} />
        <PostIndex posts={filteredPosts} />
        {displayLoadingCubes && <LoadingPosts />}
      </section>
    </section>
  </>
};

export default Timeline;
