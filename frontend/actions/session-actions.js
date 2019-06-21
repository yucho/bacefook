import * as SessionAPIUtil from 'util/session-api-util';
import { receiveAllData } from 'actions/application-actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

export const signup = user => dispatch => {
  SessionAPIUtil.requestSignup(user)
    .then(
      success => {
        dispatch(receiveCurrentUser(success));
        // dispatch(receiveAllData(success));
      },
      error => dispatch(receiveSessionError(error))
    );
};

export const login = session => dispatch => {
  SessionAPIUtil.requestLogin(session)
    .then(
      success => {
        dispatch(receiveCurrentUser(success));
        // dispatch(receiveAllData(success));
      },
      error => dispatch(receiveSessionError(error))
    );
};

export const logout = () => dispatch => {
  SessionAPIUtil.requestLogout()
    .then(
      () => dispatch(logoutCurrentUser()),
      error => dispatch(receiveSessionError(error))
    );
};

const receiveCurrentUser = ({ currentUser }) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser= session => ({
  type: LOGOUT_CURRENT_USER,
  session
});

const receiveSessionError = errors => ({
  type: RECEIVE_SESSION_ERROR,
  errors
});
