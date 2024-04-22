import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/pageComponent/novedadesComponent/Home'
import Login from './assets/Login'
import Carga from './assets/pageComponent/novedadesComponent/Carga'
import Lista from './assets/pageComponent/novedadesComponent/Lista'
import CargaIdent from './assets/pageComponent/identificacionComponent/CargaIdent/CargaIdent';
import ListaIdent from './assets/pageComponent/identificacionComponent/ListaIdent';
import CargaUsuario from './assets/pageComponent/usuariosComponent/NuevoUsuario';
import ListaUsuarios from './assets/pageComponent/usuariosComponent/ListaUsuario';
import { useState } from 'react';



function App() {


  const [user, setUser] = useState(null);

  return (
    <>
      {
        user ? (
          <Routes>
            <Route path='/' element={<Home user={user} setUser={setUser} />} >
              <Route path='Lista' element={<Lista user={user} />} />
              <Route path='Carga' element={<Carga />} />
              <Route path='ListaIdent' element={<ListaIdent user={user} />} />
              <Route path='CargaIdent' element={<CargaIdent />} />
              <Route path='CargaUsuario' element={<CargaUsuario />} />
              <Route path='ListaUsuario' element={<ListaUsuarios user={user} />} />
            </Route>
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
    </>
  )
}

export default App;
