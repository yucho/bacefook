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
    console.log('filter:', id);
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

  console.log('Timeline renders with postIds:', filteredPostIds);

  return <>
    <Header />
    <LeftSiderbar />
    <section className="timeline-main">
      <PostForm />
      <PostIndex posts={filteredPosts} />
    </section>
  </>
};

export default Timeline;