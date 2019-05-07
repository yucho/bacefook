import { combineReducers } from 'redux';
import usersReducer from 'reducers/users_reducer';
import sessionReducer from 'reducers/session-reducer';
import errorsReducer from 'reducers/errors-reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  errors: errorsReducer,
  images: (state={}) => state
});

export default entitiesReducer;
