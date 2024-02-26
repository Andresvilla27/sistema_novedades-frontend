import Home from './assets/component/home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Carga from './assets/component/Carga';
import Lista from './assets/component/Lista';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='Carga' element={<Carga />} />
        <Route path='Lista' element={<Lista />} />
      </Route>
    </Routes>
    
    
    </>
  )
}

export default App
