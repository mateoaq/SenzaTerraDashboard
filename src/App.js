import { useState, useEffect } from 'react';
import { Nav } from './components/Nav/Nav'
//import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar/SideBar';
import { Card } from './components/Card/Card';
import { CardBomba } from './components/CardBomba/CardBomba';
import { getDatabase, ref, child, get } from "firebase/database";

function App() {

  const [bombs, setBombs] = useState([])
  const [tanques, setTanques] = useState([])
  const [temp, setTemp] = useState([])

  const dbRef = ref(getDatabase());

  useEffect(() => {
    //Bombas
    get(child(dbRef, `bombas/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setBombs(snapshot.val())
        console.log('bombs', bombs)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    //Tanques
    get(child(dbRef, `tanques/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTanques(snapshot.val())
        console.log('tanques', tanques)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    //Temperatura
    get(child(dbRef, `Clima/`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTemp(snapshot.val().Temperatura)
        console.log('temp', temp)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])


  return (
    <div className="App">
      <Nav act={temp.Temperatura} max={0} min={0} />
      <SideBar />
      <div className="Data-container">
        {tanques.length > 0 ? tanques.map(({ nombre, CE, pH, Nivel }) => {
          console.log('bombs', bombs)
          return (
            <Card key={Math.random() * 90} nombre={nombre} ce={CE.CE} pH={pH.pH} nivel={Nivel} />
          )
        })
          :
          <h1>No hay Tanques </h1>
        }
        {bombs.length > 0 ? bombs.map(({ nombre, activa, inicio }) => {
          return (
            <CardBomba key={nombre} nombre={nombre} activa={activa > 0 ? true : false} inicio={inicio} />
          )
        })
          :
          <h1>No hay Bombas</h1>
        }

      </div>
    </div>
  );
}

export default App;
