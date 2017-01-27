import { combineReducers } from 'redux';
import currentUserReducer from './UserReducer.native';

const rootReducer = combineReducers({
  currentUser: currentUserReducer
});

export default rootReducer;
