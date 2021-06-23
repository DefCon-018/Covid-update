import { useEffect, useState } from 'react';
import CountryList from './CountryList';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  let dataState = useState([]);
  let data = dataState[0];
  let setData = dataState[1];

  useEffect(() => {
    let url = `https://corona.lmao.ninja/v2/countries`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <CountryList countries={data} />
      </div>
    </Router>
  );
}

export default App;
