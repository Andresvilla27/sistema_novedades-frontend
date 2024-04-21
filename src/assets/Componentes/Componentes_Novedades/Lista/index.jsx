
import axios from "axios";
import "../Lista/index.css";
import { useState, useEffect } from "react";

//desarrollo local
/* const URI = "http://localhost:8000/novedades/"; */

//desarrollo en produccion
const URI = 'https://sistema-novedades-backend.onrender.com/identificaciones/'

// eslint-disable-next-line react/prop-types
const Lista = ({ user }) => {

  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    getNovedades();
  }, []);
  const getNovedades = async () => {
    try {
      const res = await axios.get(URI);
      setNovedades(res.data);
    } catch (error) {
      console.error("Error al obtener las novedades:", error);
    }
  };

  const deleteNovedad = async (id) => {
    try {
      await axios.delete(`${URI}${id}`);
      getNovedades();
    } catch (error) {
      console.error("Error al eliminar la novedad:", error);
    }
  };

  return (
    <>
      <div className="contenedor">
        <h2>Lista de Novedades</h2>
        <table className="table table-responsive">
          <thead>
            <tr className="titulos">
              <th scope="col">Fecha</th>
              <th scope="col">Lugar de Novedad</th>
              <th scope="col">Tipo de Novedad</th>
              <th scope="col">Comisaria Interviniente</th>
              <th scope="col">Unidad Interviniente</th>
              <th scope="col">Personal Interviniente</th>
              <th scope="col">Resumen</th>
              {
                user === 1 && <th scope="col">Acciones</th>
              }
            </tr>
          </thead>
          <tbody>
            {novedades.map((novedad) => (
              <tr key={novedad.id} className="contenido">
                <td>{novedad.fecha}</td>
                <td>{novedad.lugar}</td>
                <td>{novedad.tipoNovedad}</td>
                <td>{novedad.comisaria}</td>
                <td>{novedad.unidad}</td>
                <td>{novedad.personalInterv}</td>
                <td>{novedad.resumen}</td>
                {user === 1 &&
                  <td>
                    <button
                      onClick={() => deleteNovedad(novedad.id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Lista;
