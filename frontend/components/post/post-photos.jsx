import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostPhotos } from 'actions/photos-actions';

const PostPhotos = ({ post }) => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    for(const photo_id of post.photos) {
      if (!photos[photo_id]){
        dispatch(fetchPostPhotos(post.id));
        break;
      }
    }
  }, [post, photos]);
  return post.photos.length === 0 ? <></> :
  <section className="post-photos-container">
    <div className="post-photos">
      {post.photos.map((id, i) => {
        const num = post.photos.length;
        return photos[id] ?
          <div key={id} style={pattern(num)[i]}><img src={photos[id].url} /></div> :
          <div key={id} style={pattern(num)[i]}><div className="loading-circle" /></div>
      })}
    </div>
  </section>
};

const pattern = (num) => {
  switch(num) {
    case 0: return {};
    case 1: return {
      0: { width: '100%', height: '100%' }
    };
    case 2: return {
      0: { width: '100%', height: '50%', paddingBottom: '2px' },
      1: { width: '100%', height: '50%' }
    };
    case 3: return {
      0: { width: '50%', height: '100%', paddingRight: '2px' },
      1: { width: '50%', height: '50%', paddingBottom: '2px' },
      2: { width: '50%', height: '50%' }
    };
    default: return {
      0: { width: '50%', height: '50%', paddingRight: '1px', paddingBottom: '1px' },
      1: { width: '50%', height: '50%', paddingRight: '1px', paddingTop: '1px' },
      2: { width: '50%', height: '50%', paddingLeft: '1px', paddingBottom: '1px' },
      3: { width: '50%', height: '50%', paddingLeft: '1px', paddingTop: '1px'  }
    };
  }
};

export default PostPhotos;
