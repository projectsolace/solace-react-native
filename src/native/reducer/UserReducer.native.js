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

// export const verifyLogin = (username, password) => dispatch => {
//   axios.get('watson-backend.herokuapp.com/api/watson')
// };

// export const registerUser = (credentials) => dispatch => {
//   axios.post('http://watson-backend.herokuapp.com/api/users/', credentials)
//   .then(response => {
//     dispatch(newUser(response.data));
//   })
//   .catch(err => console.error('failed to post', err));
// };
//

// export const registerUser = (credentials) => dispatch => {
//   axios.post('http://localhost/api/tokens/signup', credentials)
//   .then(response => {
//     dispatch(newUser(response.data.user));
//     Actions.homepage();
//     console.log('signed up!', response.data.user)
//   })
//   .catch(err => console.error('failed to post', err));
// };


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
