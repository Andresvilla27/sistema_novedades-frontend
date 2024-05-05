import { useState, useEffect } from "react"
import axios from "axios"

import './index.css'


// Create a reference to the file to delete


//desarrollo local
/* const URI = 'http://localhost:8000/identificaciones/'  */

//desarrollo en produccion
const URI1 = 'https://sistema-novedades-backend.onrender.com/identificaciones/'

// eslint-disable-next-line react/prop-types
const ListaIdent = ({ user }) => {

  const [identificaciones, setIdentificaciones] = useState([])


  useEffect(() => {
    getIdentificaciones()
  }, [])

  const getIdentificaciones = async () => {
    try {
      const res = await axios.get(URI1)
      setIdentificaciones(res.data)
    } catch (error) {
      console.error("Error al obtener identificaciones", error);
    }
  }

  const deleteIdentificacion = async (id) => {
    try {
      await axios.delete(`${URI1}${id}`)

      getIdentificaciones()
    } catch (error) {
      console.error("Error al eliminar identificacion", error);
    }
  }

  return (
    <>
      <h2>Lista Identificaciones</h2>
<div className="container-cards">

      <div className="cards">
        {identificaciones.map((identificacion) => (
          <div key={identificacion.id} id="card">
            <div className="headerCard">
              <img src={identificacion.img} alt="imagen" />
              <p>Nombres: {identificacion.nombre}</p>
              <p>Apellido: {identificacion.apellido}</p>
              <p>DNI: {identificacion.dni}</p>
              <p>Edad: {identificacion.edad}</p>
              <p>Fecha de Nacimiento: {identificacion.fecha_nac}</p>
              <p>Alias: {identificacion.alias}</p>
              <p>Domicilio: {identificacion.domicilio}</p>
              <p>Ocupacion: {identificacion.ocupacion}</p>
              <p>Estado Civil: {identificacion.estadoCivil}</p>
            </div>
            {user === 1 &&
              <button className="btn btn-danger" onClick={() => deleteIdentificacion(identificacion.id)}><i className="fas fa-trash-alt"></i></button>
            }
            <hr />
          </div>
        ))}
      </div>
</div>

    </>
  )
}
export default ListaIdent;