import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RECEIVE_ALL_RECORDINGS = 'RECEIVE_ALL_RECORDINGS';
const RECEIVE_ALL_RECORDINGS_AVG = 'RECEIVE_ALL_RECORDINGS_AVG';
const RECEIVE_WEEKLY_RECORDINGS = 'RECEIVE_WEEKLY_RECORDINGS';
const RECEIVE_WEEKLY_RECORDINGS_AVG = 'RECEIVE_WEEKLY_RECORDINGS_AVG';
const RECEIVE_MONTHLY_RECORDINGS = 'RECEIVE_MONTHLY_RECORDINGS';
const RECEIVE_MONTHLY_RECORDINGS_AVG = 'RECEIVE_MONTHLY_RECORDINGS_AVG';
const RECEIVE_TODAYS_RECORDINGS = 'RECEIVE_TODAYS_RECORDINGS';

/* -----------------    ACTION CREATORS   ------------------ */

const receiveAllRecordings = (recordings) => {
  return {
    type: RECEIVE_ALL_RECORDINGS,
    recordings
  };
};

const receiveAllRecordingsAvg = (recordings) => {
  return {
    type: RECEIVE_ALL_RECORDINGS_AVG,
    recordings
  };
};

const receiveWeeklyRecordings = (recordings) => {
  return {
    type: RECEIVE_WEEKLY_RECORDINGS,
    recordings
  };
};

const receiveWeeklyRecordingsAvg = (recordings) => {
  return {
    type: RECEIVE_WEEKLY_RECORDINGS_AVG,
    recordings
  };
};

const receiveMonthlyRecordings = (recordings) => {
  return {
    type: RECEIVE_MONTHLY_RECORDINGS,
    recordings
  };
};

const receiveMonthlyRecordingsAvg = (recordings) => {
  return {
    type: RECEIVE_MONTHLY_RECORDINGS_AVG,
    recordings
  };
};

const receiveTodaysRecordings = (recordings) => {
  return {
    type: RECEIVE_TODAYS_RECORDINGS,
    recordings
  };
};

/* -----------------    DISPATCHERS     ------------------ */

export const fetchAllRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/allrecordings`)
    .then(response => {
      dispatch(receiveAllRecordings(response.data));
    })
    .catch(err => console.error('failed to get all recordings', err));
};

export const fetchAllRecordingsAvg = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/allrecordings/average`)
    .then(response => {
      dispatch(receiveAllRecordingsAvg(response.data));
    })
    .catch(err => console.error('failed to get all recordings average', err));
};

export const fetchWeeklyRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/weekrecordings`)
    .then(response => {
      dispatch(receiveWeeklyRecordings(response.data));
    })
    .catch(err => console.error('failed to get weekly recordings', err));
};

export const fetchWeeklyRecordingsAvg = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/weekrecordings/average`)
    .then(response => {
      dispatch(receiveWeeklyRecordingsAvg(response.data));
    })
    .catch(err => console.error('failed to get all recordings average', err));
};

export const fetchMonthlyRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/monthrecordings`)
    .then(response => {
      dispatch(receiveMonthlyRecordings(response.data));
    })
    .catch(err => console.error('failed to get monthly recordings', err));
};

export const fetchMonthlyRecordingsAvg = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/monthrecordings/average`)
    .then(response => {
      dispatch(receiveMonthlyRecordingsAvg(response.data));
    })
    .catch(err => console.error('failed to get monthly recordings average', err));
};

export const fetchTodaysRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/FILL_ME_IN`)
    .then(response => {
      dispatch(receiveTodaysRecordings(response.data));
    })
    .catch(err => console.error('failed to get todays recordings', err));
};

/* -----------------    REDUCER     ------------------ */

const initialState = {
  allRecordings: {},
  allRecordingsAvg: {},
  weeklyRecordings: {},
  weeklyRecordingsAvg: {},
  monthlyRecordings: {},
  monthlyRecordingsAvg: {},
  todaysRecordings: {}
};

const userRecordingsReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_RECORDINGS:
      return Object.assign({}, state, { allRecordings: action.recordings });
    case RECEIVE_ALL_RECORDINGS_AVG:
      return Object.assign({}, state, { allRecordingsAvg: action.recordings });
    case RECEIVE_WEEKLY_RECORDINGS:
      return Object.assign({}, state, { weeklyRecordings: action.recordings });
    case RECEIVE_WEEKLY_RECORDINGS_AVG:
      return Object.assign({}, state, { weeklyRecordingsAvg: action.recordings });
    case RECEIVE_MONTHLY_RECORDINGS:
      return Object.assign({}, state, { monthlyRecordings: action.recordings });
    case RECEIVE_MONTHLY_RECORDINGS_AVG:
      return Object.assign({}, state, { monthlyRecordingsAvg: action.recordings });
    case RECEIVE_TODAYS_RECORDINGS:
      return Object.assign({}, state, { todaysRecordings: action.recordings });
    default:
      return state;
  }
};

export default userRecordingsReducer;
