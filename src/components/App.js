import { useEffect, useState } from 'react';
import CountryList from './CountryList';
import Navbar from './Navbar';
import Country from './Country';
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
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return <CountryList {...props} countries={data} />;
            }}
          />
          <Route path="/:country" component={Country}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
