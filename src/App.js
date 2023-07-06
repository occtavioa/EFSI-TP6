import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Formulario from './Components/Formulario';
import Puntos from './Components/Puntos';
import ResultadoRta from './Components/ResultadoRta';
import ImgPais from './Components/ImgPais';
import Timer from './Components/Timer';
import NombrePaisRandom from './Components/NombrePaisRandom';

function App() {
  const [paises, setPaises] = useState([]);
  const [paisRandom, setPaisRandom] = useState();
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
      paises[Math.round(Math.random() * paises.length)]
    );
  }, [paises])
  useEffect(() => {
    if (timer === 0) {
      setTimer(15);
      clearTimeout(ref);
      setPaisRandom(
        paises[Math.round(Math.random() * paises.length)]
      );
    } else {
      setRef(setTimeout(() => {
        setTimer(timer - 1);
      }, 1000));
    }
  }, [timer])
  function rtaCorrecta() {
    setEsCorrecta(true)
    setPuntos(puntos+10+timer)
    setTimer(0)
  }
  function rtaIncorrecta() {
    setPuntos(puntos-1)
    setEsCorrecta(false)
  }
  return (
    <div className="App">
      {paisRandom !== undefined ?
        <>
          <ImgPais nombrePais={paisRandom.name} urlFlag={paisRandom.flag}/>
          <Formulario rtaCorrecta={rtaCorrecta} rtaIncorrecta={rtaIncorrecta} nombrePaisRandom={paisRandom.name} />
        </> :
        <></>}
      <Puntos puntos={puntos}></Puntos>
      {esCorrecta === undefined ?
        <></> :
        <ResultadoRta res={esCorrecta}/>}
      <Timer timer={timer}/>
      {paisRandom !== undefined ? <NombrePaisRandom nombre={paisRandom.name}/> : <></>}
    </div>
  );
}

export default App;
