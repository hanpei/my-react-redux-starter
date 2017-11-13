import fetch from 'isomorphic-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then((result) => {
    if (result.code !== 0) {
      // TODO: 处理后台反馈的错误
      console.log('something wrong', result.code);
    }
    if (result.stack) {
      // TODO: 处理异常错误
      console.log('something wrong', result.stack);
    }
    const error = new Error(result.message);
    error.response = response;
    throw error;
  });
}

function parseJSON(response) {
  return response.json();
}

export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };

  const newOptions = { ...defaultOptions, options };

  if (newOptions.methode === 'POST' || newOptions.message === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  // TODO: encryption

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => ({ err }));
}
