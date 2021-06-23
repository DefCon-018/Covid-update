import React from 'react';
import { Link } from 'react-router-dom';

class Country extends React.Component {
  render() {
    let { country } = this.props;
    return (
      <tr>
        <td>
          <Link to={`/${country.country}`}>{country.country}</Link>
        </td>
        <td>{country.cases}</td>
        <td>{country.todayCases}</td>
        <td>{country.active}</td>
        <td className="red">{country.deaths}</td>
        <td>{country.tests}</td>
        <td className="green">{country.recovered}</td>
        <td>{country.continent}</td>
        <td className="blue">{country.population}</td>
      </tr>
    );
  }
}

export default Country;
