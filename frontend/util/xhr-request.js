const defaults = {
  method: 'GET',
  data: {},
  headers: { 'Content-type': 'application/json' },
  responseType: 'json',
  withCredentials: true
};

const xhrRequest = (options = {}) => {
  const settings = Object.assign(defaults, options);
  const request = new XMLHttpRequest();
  const xhrPromise = new Promise((resolve, reject) => {
    request.onreadystatechange = returnResponse(request, resolve, reject);
  });
  setupRequest(request, settings);
  xhrPromise.cancel = request.abort;
  return xhrPromise;
};

const returnResponse = (request, resolve, reject) => () => {
  // 0:UNSENT, 1:OPENED, 2:HEADERS_RECEIVED, 3:LOADING, 4:DONE
  if (request.readyState !== 4) return;

  const { response, status, statusText } = request;
  if (request.status >= 200 && request.status < 300) {
    resolve(response);
  } else {
    reject({ status, statusText, response });
  }
};

const setupRequest = (request, settings) => {
  const { url, method, data, headers, responseType, withCredentials, username,
    password, timeout } = settings;

  request.open(method, url, true, username, password);
  if(responseType) request.responseType = responseType;

  for (const header in headers) {
    if (headers.hasOwnProperty(header)) {
      request.setRequestHeader(header, headers[header]);
    }
  }
  if (timeout) {
    request.timeout = timeout;
    request.ontimeout = (e) => {
      reject({
        status: 408,
        statusText: 'Request timeout'
      });
    };
  }
  request.withCredentials = withCredentials;
  request.send(JSON.stringify(data));
};

export default xhrRequest;
