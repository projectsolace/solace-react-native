import { combineReducers } from 'redux';
import currentUserReducer from './UserReducer.native';
import questionsReducer from './questions.native';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  questions: questionsReducer
});

export default rootReducer;
