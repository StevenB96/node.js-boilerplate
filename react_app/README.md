# React Boilerplate
This directory is a self-contained React Boilerplate npm project, but it has been intergrated into the React/Express Boilerplate repository as a means of building monolithic full stack applications quickly. The sections below relate to the, documentation, configuration and operation of the project.

### Getting started with Create React App.
This project is based on React. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

### React Typescript guide.
This project uses the React Typescript template. To learn more about React Typescript follow this link [React Typescript Documentation](https://www.typescriptlang.org/docs/handbook/react.html).

## Build execution.
This project uses a special build command in order to make it more difficult to copy the application code. On some projects this has been a concern.
- react-scripts build && (del /S /Q build\\*.map 2> nul || rm -rf build/*.map) && (if exist .htaccess (copy .htaccess build\\) else (cp .htaccess build/))

## Example env.ts configuration.
```
SERVER_URL: "https://stevenberrisford.com"
```

## Code snippets.
### Example action.
```
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const getProfileRequest = (params) => ({
  type: GET_PROFILE_REQUEST,
  params,
});
export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});
export const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});
```
### Example reducer.
```
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../Actions/appActions';

const initialState = {
  profile: {},
  loading: false,
  error: null,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        loading: true,
        error: null
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: false
      };
    case GET_PROFILE_FAILURE:
      return {
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default app;
```
### Example saga.
```
import {
  takeLatest,
  takeEvery,
  call,
  put
} from 'redux-saga/effects';

import {
  getProfileSuccess,
  getProfileFailure,
} from '../Actions/appActions';

import {
  GET_PROFILE_REQUEST,
} from '../Actions/appActions';

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

export default function* appSagas() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
}
```

