import axios from 'axios';
import { Actions, ActionConst } from 'react-native-router-flux';

/* -----------------    ACTIONS     ------------------ */

const CREATE_USER = 'CREATE_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';



/* -----------------    ACTION CREATORS   ------------------ */

export const newUser = (createdUser) => {
  return {
    type: CREATE_USER,
    createdUser
  };
};

export const currentUser = (authenticatedUser) => {
  return {
    type: SET_CURRENT_USER,
    authenticatedUser
  };
};


/* -----------------    DISPATCHERS     ------------------ */




/* -----------------    REDUCER     ------------------ */

const reducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_USER:
    return action.createdUser;
  case SET_CURRENT_USER:
    return action.authenticatedUser;
  default:
    return state;
  }
};

export default reducer;
