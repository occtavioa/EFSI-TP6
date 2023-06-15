import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);
  const [paisRandom, setPaisRandom] = useState({});
  const [esCorrecta, setEsCorrecta] = useState(undefined);
  const [puntos, setPuntos] = useState(0);
  const [timer, setTimer] = useState(15);
  const [ref, setRef] = useState();

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
      paises[Math.round(Math.random() * 220)]
    );
  }, [paises])
  useEffect(() => {
    console.log(paises);
    console.log(paisRandom);
  }, [paisRandom])
  useEffect(() => {
    if (timer == 0) {
      setTimer(15);
      clearTimeout(ref);
      setPaisRandom(
        paises[Math.round(Math.random() * 220)]
      );
    } else {
      setRef(setTimeout(() => {
        setTimer(timer - 1);
      }, 1000));
    }
  }, [timer])
  return (
    <div className="App">
      {paisRandom ? <img id="imgPais" src={paisRandom.flag} /> : <div></div>}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.elements["pais"].value);
        if (e.target.elements["pais"].value === paisRandom.name) {
          setPuntos(puntos + 10 + timer);
          setEsCorrecta(true);
          setTimer(0);
        } else {
          setEsCorrecta(false);
          setPuntos(puntos - 1);
        }
      }}>
        <input type={"text"} name={"pais"}></input>
        <input type={"submit"} value={"comprobar"}></input>
      </form>
      <p>Puntos: {puntos}</p>
      <p>
        {esCorrecta === undefined ?
          <></> :
          esCorrecta ?
            <span style={{ color: 'green' }}>Bien</span> :
            <span style={{ color: 'red' }}>Mal</span>}
      </p>
      <p>{timer}</p>
      {paisRandom ? <p>{paisRandom.name}</p> : <></>}
    </div>
  );
}

export default App;
