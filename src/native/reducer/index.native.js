import { combineReducers } from 'redux';
import currentUserReducer from './UserReducer.native';
import userRecordingsReducer from './users.native';
import adminReducer from './admin.native';
import questionsReducer from './questions.native';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  userRecordings: userRecordingsReducer,
  admin: adminReducer,
  questions: questionsReducer
});

export default rootReducer;
