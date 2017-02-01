import { combineReducers } from 'redux';
import adminReducer from './admin.native';
import questionsReducer from './questions.native';
import recordingsReducer from './recordings.native';
import userReducer from './user.native';

const rootReducer = combineReducers({
  admin: adminReducer,
  questions: questionsReducer,
  recordings: recordingsReducer,
  user: userReducer,
});

export default rootReducer;
