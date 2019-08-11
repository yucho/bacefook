import React from 'react';

const LoadingPosts = ({numCubes = 5}) => {
  const cubes = [];
  for (let i = 0; i < numCubes; i++) {
    cubes.push(<div
      key={i}
      className="loading-posts-cube"
      style={{ animationDelay: `${0.1 * i}s` }}
    />);
  }

  return <div className="loading-posts">
    {cubes}
  </div>
};

export default LoadingPosts;
