
import axios from "axios";
import './index.css'
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/usuarios/";


// eslint-disable-next-line react/prop-types
const ListaUsuarios = ({ user }) => {



  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);
  
  const getUsuarios = async () => {
    try {
      const res = await axios.get(URI);
      setUsuarios(res.data);
    } catch (error) {
      console.error("Error al obtener las novedades:", error);
    }
  };


  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`${URI}${id}`);
      getUsuarios();
    } catch (error) {
      console.error("Error al eliminar la novedad:", error);
    }
  };

  const tipoUsuarioToString = (tipo) => {
    switch (tipo) {
      case 1:
        return "Administrador";
      case 2:
        return "Usuario Regular";
      case 3:
        return "Invitado";
      default:
        return "Desconocido";
    }
  };

  return (
    <>
      <div className="contenedor">
        <h2>Lista de Usuarios</h2>
        <table className="table table-responsive">
          <thead>
            <tr className="titulos">
              <th scope="col">Nombres</th>
              <th scope="col">Apellido</th>
              <th scope="col">Legajo Personal</th>
              <th scope="col">usuario</th>
              <th scope="col">Tipo de Usuario</th>
              <th scope="col">Fotografia</th>
              {
                user === 1 && <th scope="col">Acciones</th>
              }
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario)=>{
              return(

              <tr key={usuario.id} className="contenido">
                <td>{usuario.nombres}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.legajo}</td>
                <td>{usuario.username}</td>
                <td>{tipoUsuarioToString(usuario.user)}</td>
                <td><img src={usuario.file} alt="imagen" /></td>
                {user === 1 &&
                  <td>
                    <button
                      onClick={() => deleteUsuario(usuario.id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                }
              </tr>
              )

            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaUsuarios;
