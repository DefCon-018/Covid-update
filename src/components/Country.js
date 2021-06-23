import React from 'react';

class Country extends React.Component {
  render() {
    let { country } = this.props;
    return (
      <tr>
        <td>{country.country}</td>
        <td>{country.cases}</td>
        <td>{country.todayCases}</td>
        <td>{country.active}</td>
        <td>{country.deaths}</td>
        <td>{country.tests}</td>
        <td>{country.recovered}</td>
        <td>{country.continent}</td>
        <td>{country.population}</td>
      </tr>
    );
  }
}

export default Country;
