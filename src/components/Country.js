import React, { useEffect, useState } from 'react';

function Country(props) {
  let [country, setCountry] = useState({});
  useEffect(() => {
    console.log(props);
    let { country } = props.match.params;
    let url = `https://corona.lmao.ninja/v2/countries/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.countryInfo.flag);
        setCountry(data);
      });
  }, []);

  return (
    <div className="country-details">
      <div className="country-heading">
        {/* <div className="flag-image">
          {!country.countryInfo && (
            <h1 style={{ fontFamily: 'sans-serif' }}> Loading...</h1>
          )}
          {country.countryInfo && <img src={country.countryInfo.flag} />}
        </div> */}
        <div>
          {country.country && (
            <h1 className="country-name">{country.country}</h1>
          )}
        </div>
      </div>
      {country.cases && (
        <div className="details">
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
    </div>
  );
}

export default Country;
