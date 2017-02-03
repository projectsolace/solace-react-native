import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RECEIVE_A_QUOTE   = 'RECEIVE_A_QUOTE'

/* ------------   ACTION CREATORS     ------------------ */


const receiveAQuote = (quote) => {
  return {
    type: RECEIVE_A_QUOTE,
    quote: quote[0]
  }
}

/* ------------       REDUCER     ------------------ */

export default function quotesReducer (quote = {}, action) {
  switch (action.type) {
    case RECEIVE_A_QUOTE:
      return action.quote;
    default:
      return quote;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchAQuote = () => dispatch => {
    axios.get(`https://watson-backend.herokuapp.com/api/questions/quote`)
    .then(res=> res.data)
    .then(quote => {
      dispatch(receiveAQuote(quote));
    })
}


