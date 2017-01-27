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

// export const verifyLogin = (username, password) => dispatch => {
//   axios.get('watson-backend.herokuapp.com/api/watson')
// };

export const registerUser = (credentials) => dispatch => {
  axios.post('watson-backend.herokuapp.com/api/users/', credentials)
  .then(response => {
    dispatch(newUser(response.data));
  })
  .catch(err => console.error('failed to post', err));
};

/* -----------------    REDUCER     ------------------ */

const reducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_USER:
    return action.createdUser;
  default:
    return state;
  }
};

export default reducer;
