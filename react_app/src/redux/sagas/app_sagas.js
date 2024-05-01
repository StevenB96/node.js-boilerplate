import {
  takeLatest,
  takeEvery,
  call,
  put
} from 'redux-saga/effects';

import {
  getProfileSuccess,
  getProfileFailure,

  getContentSuccess,
  getContentFailure,
} from '../actions/app_actions';

import {
  GET_PROFILE_REQUEST,
  GET_CONTENT_REQUEST,
} from '../actions/app_actions';

import { fetchDataFromApi } from '../api';
import env from '../../env';

function* getProfile(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.SERVER_URL || "http://localhost:3000"}/`,
      path: 'profile/',
      qParams: '',
      payload: action.payload
    });

    yield put(getProfileSuccess(data));
  } catch (error) {
    yield put(getProfileFailure(error.message));
  }
}

function* getContent(action) {
  try {
    const data = yield call(fetchDataFromApi, {
      method: 'GET',
      url: `${env.SERVER_URL || "http://localhost:3000"}/`,
      path: 'content/',
      qParams: '',
      payload: action.payload
    });

    yield put(getContentSuccess(data));
  } catch (error) {
    yield put(getContentFailure(error.message));
  }
}

export default function* app_sagas() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(GET_CONTENT_REQUEST, getContent);
}
