import { combineReducers } from 'redux';
import { GET_COUNTRY_DETAIL, GET_COUNTRY_HISTORY } from '../actions';

export function country(state = [], action) {
  switch (action.type) {
    case GET_COUNTRY_DETAIL:
      return action.country;
    default:
      return state;
  }
}

let initialState = {
  cases: {},
  deaths: {},
  recovered: {},
};

export function history(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_HISTORY:
      return {
        cases: action.action.cases,
        deaths: action.action.deaths,
        recovered: action.action.recovered,
      };
    default:
      return state;
  }
}

export default combineReducers({
  country,
  history,
});
