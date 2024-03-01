import Home from './assets/component/home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './assets/component/Login'
import Carga from './assets/component/Carga';
import Lista from './assets/component/Lista';
import { useState } from 'react';


function App() {
  const [nombre, setNombre] = useState([]);
  return (
    <>
      {
        !nombre.length > 0
          ? <Login setUser={setNombre} />
          : 
      <Routes>
        <Route path='/' element={<Home nombre={nombre} setNombre={setNombre}/>} >
          <Route path='Lista' element={<Lista />} />
          <Route path='Carga' element={<Carga />} />
        </Route>
      </Routes>
      }
    </>
  )
}

export default App
