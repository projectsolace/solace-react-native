import { combineReducers } from 'redux';
import currentUserReducer from './UserReducer.native';
import userRecordingsReducer from './users.native';
import adminReducer from './admin.native';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  userRecordings: userRecordingsReducer,
  admin: adminReducer
});

export default rootReducer;
