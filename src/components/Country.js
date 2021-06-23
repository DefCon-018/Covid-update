import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCountryDetail, fetchHistoryDetail } from '../actions';

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHistory: 0,
    };
  }

  handleHistoryClick = () => {
    this.setState((prevState) => {
      return {
        showHistory: prevState.showHistory ^ 1,
      };
    });
  };

  componentDidMount() {
    let { country } = this.props.match.params;
    this.props.dispatch(fetchCountryDetail(country));
    this.props.dispatch(fetchHistoryDetail(country));
  }
  render() {
    let { country, history } = this.props;
    console.log('country history', history);
    let { showHistory } = this.state;
    let array = [];
    for (let h in history.cases) {
      let obj = {
        date: h,
        cases: history.cases[h],
        deaths: history.deaths[h],
        recovered: history.recovered[h],
      };
      array.push(obj);
    }
    console.log(array);
    {
      if (country.country !== this.props.match.params.country) {
        return <h1 className="loading">Loading...</h1>;
      }
    }
    return (
      <div className="country-details">
        <div className="country-heading">
          <div>
            {country.country && (
              <h1 className="country-name">{country.country}</h1>
            )}
          </div>
        </div>
        {country.cases && (
          <div className="details-card">
            <div className="card">
              <h2 className="blue">
                Total Cases : <span className="count">{country.cases}</span>
              </h2>
              <div className="new-cases">
                <div>
                  <h3>New cases : </h3>
                  <h3 className="blue">{country.todayCases}</h3>
                </div>
                <div>
                  <h3>Active cases : </h3>
                  <h3 className="blue">{country.active}</h3>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="blue">
                Total Deaths : <span className="count">{country.deaths}</span>
              </h2>
              <div className="new-cases">
                <div>
                  <h3>Today Deaths : </h3>
                  <h3 className="blue">{country.todayDeaths}</h3>
                </div>
                <div>
                  <h3>Critical : </h3>
                  <h3 className="blue">{country.critical}</h3>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="blue">
                Recovered : <span className="count">{country.recovered}</span>
              </h2>
              <div className="new-cases">
                <div>
                  <h3>
                    Today Recovered :{' '}
                    <span className="blue">{country.todayRecovered}</span>{' '}
                  </h3>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        <div className="button">
          {showHistory === 0 && (
            <button className="btn" onClick={this.handleHistoryClick}>
              Show History
            </button>
          )}
          {showHistory === 1 && (
            <button className="btn green" onClick={this.handleHistoryClick}>
              Hide History
            </button>
          )}
        </div>
        {showHistory === 1 && (
          <div>
            <table className="history-table">
              <tr className="detail-head">
                <td>Date</td>
                <td>Cases</td>
                <td>Deaths</td>
                <td>Recovered</td>
              </tr>
              {array.map((history) => {
                return (
                  <tr>
                    <td>{history.date}</td>
                    <td>{history.cases}</td>
                    <td>{history.deaths}</td>
                    <td>{history.recovered}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ country, history }) {
  return {
    country,
    history,
  };
}

export default connect(mapStateToProps)(Country);
