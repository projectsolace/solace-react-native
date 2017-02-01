import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RECEIVE_RELIGION_DATA = 'RECEIVE_RELIGION_DATA';
const RECEIVE_OCCUPATION_DATA = 'RECEIVE_OCCUPATION_DATA';
const RECEIVE_INCOME_DATA = 'RECEIVE_INCOME_DATA';
const RECEIVE_ETHNICITY_DATA = 'RECEIVE_ETHNICITY_DATA';
const RECEIVE_EDUCATION_DATA = 'RECEIVE_EDUCATION_DATA';
const RECEIVE_MARITAL_DATA = 'RECEIVE_MARITAL_DATA';
const RECEIVE_ZIP_CODE_DATA = 'RECEIVE_ZIP_CODE_DATA';
const RECEIVE_GENDER_DATA = 'RECEIVE_GENDER_DATA';

/* -----------------    ACTION CREATORS   ------------------ */

const receiveReligionData = (dataObj) => {
  return {
    type: RECEIVE_RELIGION_DATA,
    dataObj
  };
};

const receiveOccupationData = (dataObj) => {
  return {
    type: RECEIVE_OCCUPATION_DATA,
    dataObj
  };
};

const receiveIncomeData = (dataObj) => {
  return {
    type: RECEIVE_INCOME_DATA,
    dataObj
  };
};

const receiveEthnicityData = (dataObj) => {
  return {
    type: RECEIVE_ETHNICITY_DATA,
    dataObj
  };
};

const receiveEducationData = (dataObj) => {
  return {
    type: RECEIVE_EDUCATION_DATA,
    dataObj
  };
};

const receiveMaritalData = (dataObj) => {
  return {
    type: RECEIVE_MARITAL_DATA,
    dataObj
  };
};

const receiveZipCodeData = (dataObj) => {
  return {
    type: RECEIVE_ZIP_CODE_DATA,
    dataObj
  };
};

const receiveGenderData = (dataObj) => {
  return {
    type: RECEIVE_GENDER_DATA,
    dataObj
  };
};

/* -----------------    DISPATCHERS     ------------------ */

export const fetchReligionData = (religion) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/religion/${religion}`)
    .then(response => {
      dispatch(receiveReligionData(response.data));
    })
    .catch(err => console.error('failed to get religion data', err));
};

export const fetchOccupationData = (occupation) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/occupation/${occupation}`)
    .then(response => {
      dispatch(receiveOccupationData(response.data));
    })
    .catch(err => console.error('failed to get occupation data', err));
};

export const fetchIncomeData = (income) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/incomeLevel/${income}`)
    .then(response => {
      dispatch(receiveIncomeData(response.data));
    })
    .catch(err => console.error('failed to get income data', err));
};

export const fetchEthnicityData = (ethnicity) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/ethnicity/${ethnicity}`)
    .then(response => {
      dispatch(receiveEthnicityData(response.data));
    })
    .catch(err => console.error('failed to get ethnicity data', err));
};

export const fetchEducationData = (education) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/education/${education}`)
    .then(response => {
      dispatch(receiveEducationData(response.data));
    })
    .catch(err => console.error('failed to get education data', err));
};

export const fetchMaritalData = (marital) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/maritalStatus/${marital}`)
    .then(response => {
      dispatch(receiveMaritalData(response.data));
    })
    .catch(err => console.error('failed to get marital data', err));
};

export const fetchZipCodeData = (zipCode) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/zipCode/${zipCode}`)
    .then(response => {
      dispatch(receiveZipCodeData(response.data));
    })
    .catch(err => console.error('failed to get zip code data', err));
};

export const fetchGenderData = (gender) => dispatch => {
  axios.get(`https://watson-backend.herokuapp.com/api/admin/gender/${gender}`)
    .then(response => {
      dispatch(receiveGenderData(response.data));
    })
    .catch(err => console.error('failed to get gender data', err));
};

/* -----------------    REDUCER     ------------------ */

const initialState = {
  religionData: {},
  occupationData: {},
  incomeData: {},
  ethnicityData: {},
  educationData: {},
  maritalData: {},
  zipCodeData: {},
  genderData: {}
};

export default function adminReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RELIGION_DATA:
      return Object.assign({}, state, { religionData: action.dataObj });
    case RECEIVE_OCCUPATION_DATA:
      return Object.assign({}, state, { occupationData: action.dataObj });
    case RECEIVE_INCOME_DATA:
      return Object.assign({}, state, { incomeData: action.dataObj });
    case RECEIVE_ETHNICITY_DATA:
      return Object.assign({}, state, { ethnicityData: action.dataObj });
    case RECEIVE_EDUCATION_DATA:
      return Object.assign({}, state, { educationData: action.dataObj });
    case RECEIVE_MARITAL_DATA:
      return Object.assign({}, state, { maritalData: action.dataObj });
    case RECEIVE_ZIP_CODE_DATA:
      return Object.assign({}, state, { zipCodeData: action.dataObj });
    case RECEIVE_GENDER_DATA:
      return Object.assign({}, state, { genderData: action.dataObj });
    default:
      return state;
  }
}
