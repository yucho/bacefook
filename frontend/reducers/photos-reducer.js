import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from 'actions/photos-actions';

const photosReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {}
  switch (action.type) {
    case RECEIVE_PHOTOS:
      action.photos.forEach(el => newState[el.id] = el);
      return Object.assign({}, prevState, newState);
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return Object.assign({}, prevState, newState);
    case REMOVE_PHOTO:
      newState = Object.assign({}, prevState);
      if (newState[action.id]) {
        delete newState[action.id];
        return newState
      }
      return prevState;
    default:
      return prevState;
  }
};

export default photosReducer;
