import { all } from 'redux-saga/effects';
import app_sagas from './app_sagas';

export default function* rootSaga() {
  yield all([
    app_sagas(),
  ]);
}