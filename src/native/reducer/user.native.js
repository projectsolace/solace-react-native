import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AlertIOS, AsyncStorage } from 'react-native';



/* -----------------    ACTIONS     ------------------ */

const CREATE_USER = 'CREATE_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';


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

export const updateUser = (updatedUser) => {
  return {
    type: UPDATE_USER,
    updatedUser
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER
  };
};

/* -----------------    DISPATCHERS     ------------------ */

export const updateCurrentUser = (id, credentials) => dispatch => {
  axios.put(`https://watson-backend.herokuapp.com/api/users/${id}`, credentials)
  .then(response => {
    const user = response.data;
    dispatch(updateUser(user));
    Actions.homepage();
  })
  .catch(err => console.error('unable to update', err));
};

export const logoutUser = () => dispatch => {
  AsyncStorage.removeItem('id_token')
  .then(removed => {
    dispatch(removeUser()),
    Actions.entryPoint(),
    AlertIOS.alert('Logout Success!')
  })
  .catch(err => console.error('unable to logout', err));
};


/* -----------------    REDUCER     ------------------ */

export default function userReducer (state = {}, action) {
  switch (action.type) {
  case CREATE_USER:
    return action.createdUser;
  case SET_CURRENT_USER:
    return action.authenticatedUser;
  case UPDATE_USER:
    return action.updatedUser;
  case REMOVE_USER:
    return {};
  default:
    return state;
  }
}
