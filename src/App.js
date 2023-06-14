import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);
  const [paisRandom, setPaisRandom] = useState({});
  const [puntos, setPuntos] = useState(0);
  const pResultado = document.getElementById('resultado');

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(async function (response) {
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
    //document.getElementById('imgPais').src=paisRandom.flag;
  }, [paisRandom])
  useEffect(() => {
    setTimeout(() => {
      // document.getElementById('timer').innerText=''
      console.log('a');
    }, 1000)
  })
  return (
    <div className="App">
      { paisRandom ? <img id="imgPais" src={paisRandom.flag} /> : <div></div> } 
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.elements["pais"].value);
        if(e.target.elements["pais"].value == paisRandom.name) {
          setPuntos(puntos+10);
          pResultado.style.color='green';
          pResultado.innerText='Bien';
          console.log("bien");
          setPaisRandom(
            paises[Math.round(Math.random()*220)]
          )
        } else {
          setPuntos(puntos-1);
          pResultado.style.color='red';
          pResultado.innerText='Mal';
          console.log("mal");
        }
      }}>
        <input type={"text"} name={"pais"}></input>
        <input type={"submit"} value={"comprobar"}></input> 
      </form>
      <p>Puntos: {puntos}</p>
      <p id='resultado'></p>
      <p id="timer"></p>
    </div>
  );
}

export default App;
