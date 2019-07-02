export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const createPhoto = (photo) => (dispatch) => (
  $.ajax({
    url: 'api/photos',
    method: 'POST',
    data: photo
  })
    .then(
      (success) => dispatch(receivePhoto(success)),
      (error) => console.log(error)
    )
);

export const fetchPhoto = (id) => (dispatch) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'GET',
  })
    .then(
      (success) => dispatch(receivePhoto(success)),
      (error) => console.log(error)
    )
);

export const fetchPostPhotos = (id) => (dispatch) => (
  $.ajax({
    url: `api/posts/${id}/photos`,
    method: 'GET',
  })
    .then(
      (success) => dispatch(receivePhotos(success.photos)),
      (error) => console.log(error)
    )
);

export const destroyPhoto = ({ id }) => (dispatch) => (
  $.ajax({
    url: `api/photos/${id}`,
    method: 'DELETE'
  })
    .then(
      (success) => dispatch(removePhoto(id)),
      (error) => console.log(error)
    )
);

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id
});
