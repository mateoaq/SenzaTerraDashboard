import { useState, useEffect } from 'react';
import { Nav } from './components/Nav/Nav'
//import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Card } from './components/Card/Card';
import { CardBomba } from './components/CardBomba/CardBomba';
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { getBombas } from './db/getBombas';
import { getTemp } from './db/getTemp';
import { getHistoryTemp } from './db/getHistory';
import { picosTemperatura } from './functions/picosTemperatura';

function App() {

  const [bombs, setBombs] = useState([]);
  const [tanques, setTanques] = useState([]);
  const [temp, setTemp] = useState([]);
  const [historyTempArray, setHistoryTempArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);

  const db = getDatabase();
  const isActiveBomb = ref(db, 'bombas/');
  const actualTemp = ref(db, 'temperatura/');
  const historyTemp = ref(db, 'history/temp/');

  useEffect(() => {
    getBombas(setLoading, isActiveBomb, get, setBombs);
    getTemp(actualTemp, get, setTemp);
    getHistoryTemp(historyTemp, get, setHistoryTempArray)
  }, [])

  // useEffect(() => {
  //   picosTemperatura(historyTempArray, setMaxTemp, setMinTemp);
  // }, [historyTempArray])

  return (
    <div className="App">
      <Nav act={temp} max={maxTemp} min={minTemp} />
      <SideBar />

      {loading ?

        <div className="Data-container">
          <h3>Cargando....</h3>
        </div>

        :

        <div className="Data-container">
          {/* {tanques.length > 0 ? tanques.map(({ nombre, CE, pH, Nivel }) => {
            return (
              <Card key={Math.random() * 90} nombre={nombre} ce={CE.CE} pH={pH.pH} nivel={Nivel} />
            )
          })
            :
            <h1>No hay Tanques </h1>
          } */}
          {bombs.length > 0 ? bombs.map(({ nombre, activa, caudal }) => {
            debugger
            return (
              <CardBomba key={nombre} nombre={nombre} activa={activa > 0 ? true : false} caudal={caudal} />
            )
          })
            :
            <h1>No hay Bombas</h1>
          }

        </div>

      }
    </div>
  );
}

export default App;
