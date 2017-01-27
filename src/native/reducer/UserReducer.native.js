import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const CREATE_USER = 'CREATE_USER';



/* -----------------    ACTION CREATORS   ------------------ */

const newUser = (createdUser) => {
  return {
    type: CREATE_USER,
    createdUser
  };
};



/* -----------------    DISPATCHERS     ------------------ */



/* -----------------    REDUCER     ------------------ */

const reducer = (state = [], action) => {
  switch (action.type) {
  case CREATE_USER:
    return action.createdUser;
  default:
    return state;
  }
};

export default reducer;
