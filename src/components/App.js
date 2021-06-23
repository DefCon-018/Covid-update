import { useEffect, useState } from 'react';
import CountryList from './CountryList';
import Navbar from './Navbar';

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
    <div className="App">
      <Navbar />
      <CountryList countries={data} />
    </div>
  );
}

export default App;
