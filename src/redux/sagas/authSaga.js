import { takeLatest, call, put } from 'redux-saga/effects';
import { types, actions } from '../modules/auth';
import * as api from '../../api/api';

// saga workers
function* login({ username, password }) {
  try {
    const response = yield call(api.login, { username, password });
    const { token } = response;
    if (token) {
      yield put(actions.loginSuccess(token));
      window.localStorage.setItem('token', token);
    } else {
      yield put(actions.loginFailure(response.message));
      // TODO: show toast tips
    }
  } catch (error) {
    console.error(error);
    yield put(actions.loginFailure(error));
  }
}

function* logout() {
  yield window.localStorage.clear();
}

function* checkToken() {
  const token = window.localStorage.getItem('token');
  if (token) {
    yield put(actions.loginSuccess(token));
  }
}

// saga watchers
export default function* watchAuthFlow() {
  yield takeLatest(types.CHECK_TOKEN_FROM_LOCALSTORAGE, checkToken);
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeLatest(types.LOGOUT, logout);
}
