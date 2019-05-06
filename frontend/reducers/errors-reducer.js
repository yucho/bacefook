import { combineReducers } from 'redux';
import sessionErrorsReducer from 'reducers/session-errors-reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;
