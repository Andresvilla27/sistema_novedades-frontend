import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/component/Home'
import Login from './assets/component/Login'
import Carga from './assets/component/Carga';
import Lista from './assets/component/Lista';
import { useState } from 'react';




function App() {

  
  const [user, setUser] = useState([]);

  return (
    <>
      {/* {
        !user.length > 0
          ? <Login setUser={setUser} />
          :
      } */}
          <Routes>
            <Route path='/' element={<Home user={user} setUser={setUser} />} >
              <Route path='Lista' element={<Lista />} />
              <Route path='Carga' element={<Carga />} />
            </Route>
          </Routes>
    </>
  )
}

export default App;
