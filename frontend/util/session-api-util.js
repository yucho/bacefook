import xhrRequest from 'util/xhr-request';

export const requestSignup = user => (
  xhrRequest({
    url:'/api/users',
    method: 'POST',
    data: { user }
  })
);

export const requestLogin = session => (
  xhrRequest({
    url: '/api/session',
    method: 'POST',
    data: { session }
  })
);

export const requestLogout = () => (
  xhrRequest({
    url:'/api/session',
    method: 'DELETE'
  })
);
