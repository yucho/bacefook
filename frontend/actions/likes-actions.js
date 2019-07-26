import { factoryActions } from 'util/factory-actions';

export default factoryActions({
  singular: 'like',
  plural: 'likes',
  url: 'api/likes',
  RECEIVE_MANY: 'RECEIVE_LIKES',
  RECEIVE_ONE: 'RECEIVE_LIKE',
  REMOVE_ONE: 'REMOVE_LIKE'
});
