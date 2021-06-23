import React from 'react';
import Country from './Country';

class CountryList extends React.Component {
  render() {
    let { countries } = this.props;
    console.log(this.props);
    return (
      <div className="country-list">
        <div className="details">
          <div className="heading">
            <h2 className="blue">WORLD COVID-19 DETAILS</h2>
          </div>
          <div>
            <table className="table">
              <tr>
                <td>Location</td>
                <td>Cases</td>
                <td>New Cases</td>
                <td>Active Cases</td>
                <td>Total Deaths</td>
                <td>Total Tests</td>
                <td>Recovered</td>
                <td>Continent</td>
                <td>Population</td>
              </tr>
              {countries.map((country) => {
                return <Country country={country} />;
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryList;
