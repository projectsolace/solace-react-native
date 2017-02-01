import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RECEIVE_LATEST_RECORDINGS = 'RECEIVE_LATEST_RECORDINGS';
const RECEIVE_WEEKLY_AVG_RECORDINGS = 'RECEIVE_WEEKLY_AVG_RECORDINGS';
const RECEIVE_MONTHLY_AVG_RECORDINGS = 'RECEIVE_MONTHLY_AVG_RECORDINGS';
const RECEIVE_ALL_AVG_RECORDINGS = 'RECEIVE_ALL_AVG_RECORDINGS';
const RECEIVE_WEEKLY_TOTAL_RECORDINGS = 'RECEIVE_WEEKLY_TOTAL_RECORDINGS';
const RECEIVE_MONTHLY_TOTAL_RECORDINGS = 'RECEIVE_MONTHLY_TOTAL_RECORDINGS';
const RECEIVE_ALL_TOTAL_RECORDINGS = 'RECEIVE_ALL_TOTAL_RECORDINGS';

/* -----------------    ACTION CREATORS   ------------------ */

const receiveLatestRecordings = (recordings) => {
  return {
    type: RECEIVE_LATEST_RECORDINGS,
    recordings
  };
};

const receiveWeeklyAvgRecordings = (recordings) => {
  return {
    type: RECEIVE_WEEKLY_AVG_RECORDINGS,
    recordings
  };
};

const receiveMonthlyAvgRecordings = (recordings) => {
  return {
    type: RECEIVE_MONTHLY_AVG_RECORDINGS,
    recordings
  };
};

const receiveAllAvgRecordings = (recordings) => {
  return {
    type: RECEIVE_ALL_AVG_RECORDINGS,
    recordings
  };
};

const receiveWeeklyTotalRecordings = (recordings) => {
  return {
    type: RECEIVE_WEEKLY_TOTAL_RECORDINGS,
    recordings
  };
};

const receiveMonthlyTotalRecordings = (recordings) => {
  return {
    type: RECEIVE_MONTHLY_TOTAL_RECORDINGS,
    recordings
  };
};

const receiveAllTotalRecordings = (recordings) => {
  return {
    type: RECEIVE_ALL_TOTAL_RECORDINGS,
    recordings
  };
};

/* -----------------    DISPATCHERS     ------------------ */

export const fetchLatestRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/singlerecording`)
    .then(response => {
      dispatch(receiveLatestRecordings(response.data));
    })
    .catch(err => console.error('failed to get latest recordings', err));
};

export const fetchWeeklyAvgRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/weekrecordings/average`)
    .then(response => {
      dispatch(receiveWeeklyAvgRecordings(response.data));
    })
    .catch(err => console.error('failed to get weekly average recordings', err));
};

export const fetchMonthlyAvgRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/monthrecordings/average`)
    .then(response => {
      dispatch(receiveMonthlyAvgRecordings(response.data));
    })
    .catch(err => console.error('failed to get monthly average recordings', err));
};

export const fetchAllAvgRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/allrecordings/average`)
    .then(response => {
      dispatch(receiveAllAvgRecordings(response.data));
    })
    .catch(err => console.error('failed to get all average recordings', err));
};

export const fetchWeeklyTotalRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/weekrecordings`)
    .then(response => {
      dispatch(receiveWeeklyTotalRecordings(response.data));
    })
    .catch(err => console.error('failed to get weekly total recordings', err));
};

export const fetchMonthlyTotalRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/monthrecordings`)
    .then(response => {
      dispatch(receiveMonthlyTotalRecordings(response.data));
    })
    .catch(err => console.error('failed to get monthly total recordings', err));
};

export const fetchAllTotalRecordings = (userId) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/users/${userId}/allrecordings`)
    .then(response => {
      dispatch(receiveAllTotalRecordings(response.data));
    })
    .catch(err => console.error('failed to get all total recordings', err));
};

/* -----------------    REDUCER     ------------------ */

const initialState = {
  latestRecordings: {},
  weeklyAvgRecordings: {},
  monthlyAvgRecordings: {},
  allAvgRecordings: {},
  weeklyTotalRecordings: {},
  monthlyTotalRecordings: {},
  allTotalRecordings: {}
};

export default function recordingsReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LATEST_RECORDINGS:
      return Object.assign({}, state, { latestRecordings: action.recordings });
    case RECEIVE_WEEKLY_AVG_RECORDINGS:
      return Object.assign({}, state, { weeklyAvgRecordings: action.recordings });
    case RECEIVE_MONTHLY_AVG_RECORDINGS:
      return Object.assign({}, state, { monthlyAvgRecordings: action.recordings });
    case RECEIVE_ALL_AVG_RECORDINGS:
      return Object.assign({}, state, { allAvgRecordings: action.recordings });
    case RECEIVE_WEEKLY_TOTAL_RECORDINGS:
      return Object.assign({}, state, { weeklyTotalRecordings: action.recordings });
    case RECEIVE_MONTHLY_TOTAL_RECORDINGS:
      return Object.assign({}, state, { monthlyTotalRecordings: action.recordings });
    case RECEIVE_ALL_TOTAL_RECORDINGS:
      return Object.assign({}, state, { allTotalRecordings: action.recordings });
    default:
      return state;
  }
}
