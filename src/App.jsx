import Home from './assets/component/home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Carga from './assets/component/Carga';
import Lista from './assets/component/Lista';
import jsPDF from 'jspdf';




function App() {

  

  const PDF = {
    fecha: '',
    lugar: '',
    comisaria: '',
    unidadMovil: ''
  }

  const generarPDF = () =>{
    const doc = new jsPDF();
    doc.text(`fecha: ${PDF.fecha}`, 10, 20);
    doc.text(`lugar: ${PDF.lugar}`, 10, 30)

    doc.save(`documento.pdf`)
  }


  


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='Carga' element={<Carga />} />
        <Route path='Lista' element={<Lista />} />
      </Route>
    </Routes>
    <button onClick={generarPDF}>generar PDF</button>
    
    </>
  )
}

export default App
