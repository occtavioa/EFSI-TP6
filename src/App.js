import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);
  const [paisRandom, setPaisRandom] = useState({});
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(function (response) {
        setPaises(
          [...response.data.data]
        )
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }, [])
  useEffect(() => {
    setPaisRandom(
      paises[0]
    )
    console.log(paises);
  }, [paises])
  console.log(paisRandom);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
