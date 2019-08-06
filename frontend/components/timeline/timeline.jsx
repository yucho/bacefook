import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/app/header';
import LeftSiderbar from 'components/timeline/left-sidebar';
import PostForm from 'components/post/post-form';
import PostIndex from 'components/post/post-index';
import { fetchNewsFeed } from 'actions/users-actions';

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
  useEffect(() => {
    dispatch(fetchNewsFeed());
  }, []);

  return <>
    <Header />
    <section className="timeline-container">
      <LeftSiderbar />
      <section className="timeline-content">
        <PostForm postable_id={userId} />
        <PostIndex posts={filteredPosts} />
      </section>
    </section>
  </>
};

export default Timeline;
