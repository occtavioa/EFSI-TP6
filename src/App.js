import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);
  const [paisRandom, setPaisRandom] = useState({});
  const [puntos, setPuntos] = useState(0);
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
      paises[Math.round(Math.random()*220)]
    )
  }, [paises])
  useEffect(() => {
    console.log(paises);
    console.log(paisRandom);
  }, [paisRandom])
  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.elements["pais"].value);
        if(e.target.elements["pais"].value == paisRandom.name) {
          setPuntos(puntos+10);
          console.log("bien");
        } else {
          setPuntos(puntos-1);
          console.log("mal");
        }
      }}>
        <input type={"text"} name={"pais"}></input>
        <input type={"submit"} value={"comprobar"}></input> 
      </form>
      <p>Puntos: {puntos}</p>
    </div>
  );
}

export default App;
