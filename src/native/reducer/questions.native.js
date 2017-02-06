import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RECEIVE_THREE_QUESTIONS   = 'RECEIVE_THREE_QUESTIONS'

/* ------------   ACTION CREATORS     ------------------ */


const receiveThreeQuestions = (questions) => {
  return {
    type: RECEIVE_THREE_QUESTIONS,
    questions
  }
}

/* ------------       REDUCER     ------------------ */

export default function questionsReducer (questions = [], action) {
  switch (action.type) {
    case RECEIVE_THREE_QUESTIONS:
      return action.questions;
    default:
      return questions;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchThreeQuestions = () => dispatch => {
    axios.get(`https://solace-admin.herokuapp.com/api/questions`)
    .then(res=> res.data)
    .then(questions => {
      dispatch(receiveThreeQuestions(questions));
    })
}


