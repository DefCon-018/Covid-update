export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_COUNTRY_HISTORY = 'GET_COUNTRY_HISTORY';

export function fetchCountryDetail(country) {
  return (dispatch) => {
    let url = `https://corona.lmao.ninja/v2/countries/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCountryDetail(data));
      });
  };
}

export function getCountryDetail(country) {
  return {
    type: GET_COUNTRY_DETAIL,
    country,
  };
}

export function fetchHistoryDetail(country) {
  return (dispatch) => {
    let url = `https://corona.lmao.ninja/v2/historical`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let history = data.filter((d) => d.country === country);
        dispatch(getHistory(history[0].timeline));
      });
  };
}

export function getHistory(history) {
  console.log('history', history);
  return {
    type: GET_COUNTRY_HISTORY,
    action: history,
  };
}
