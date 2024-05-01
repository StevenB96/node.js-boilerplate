import { combineReducers } from 'redux';
import app_reducer from './app_reducer';

const rootReducer = combineReducers({
  app: app_reducer,
});

export default rootReducer;