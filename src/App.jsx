import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Componentes/Componentes_Novedades/Home'
import Login from './assets/Login'
import Carga from './assets/Componentes/Componentes_Novedades/Carga'
import Lista from './assets/Componentes/Componentes_Novedades/Lista'
import CargaIdent from './assets/Componentes/Componentes_Identificaciones/CargaIdent';
import ListaIdent from './assets/Componentes/Componentes_Identificaciones/ListaIdent';
import CargaUsuario from './assets/Componentes/Componentes_Usuarios/NuevoUsuario';
import ListaUsuarios from './assets/Componentes/Componentes_Usuarios/ListaUsuario';
import { useState } from 'react';



function App() {


  const [user, setUser] = useState([]);



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
