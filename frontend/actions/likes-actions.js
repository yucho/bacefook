import { factoryActions } from 'util/factory-actions';

export const actions = factoryActions({
  singular: 'like',
  plural: 'likes',
  url: '/api/likes',
  RECEIVE_MANY: 'RECEIVE_LIKES',
  RECEIVE_ONE: 'RECEIVE_LIKE',
  REMOVE_ONE: 'REMOVE_LIKE'
});

export const createLike = actions.createLike;
export const fetchLike = actions.fetchLike;
export const destroyLike = actions.destroyLike;
export const receiveLikes = actions.receiveLikes;
export const receiveLike = actions.receiveLike;
export const removeLike = actions.removeLike;
export const RECEIVE_LIKES = actions.RECEIVE_LIKES;
export const RECEIVE_LIKE = actions.RECEIVE_LIKE;
export const REMOVE_LIKE = actions.REMOVE_LIKE;
