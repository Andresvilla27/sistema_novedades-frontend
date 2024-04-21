import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { upLoadFileUser } from '../../../../firebase';




//desarrollo local
const URI = 'http://localhost:8000/usuarios/'


//produccion
/* const URI = 'https://sistema-novedades-backend.onrender.com/login/' */




const CargaUsuario = () => {

  const [nombres, setNombres] = useState('')
  const [apellido, setApellido] = useState('')
  const [legajo, setLegajo] = useState('')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')
  const [file, setFile] = useState('')
  const navigate = useNavigate()


  /* const [admin, setAdmin] = useState('')

  if(tipoUsuario === 1){
    setAdmin('admin')
  }if(tipoUsuario === 2){
    setAdmin('user')
  } */
 
  //procedimiento guardar el usuario

   const store = async (e) => {
      e.preventDefault();
      try {
        const imageUrl = await upLoadFileUser(file)
        await axios.post(URI, {
          nombres: nombres,
          apellido: apellido,
          legajo: legajo,
          file: imageUrl,
          username: usuario,
          password: password,
          user: tipoUsuario,
        })

        navigate('/ListaUsuario')
      } catch (error) {
        console.error("Error al crear el usuario", error);
      }

    };

    return (
      <>

        <div>

          <form onSubmit={store} >
            <h4 className="form-titulo">Nuevo Usuario</h4>
            <input type="text" name="nombres" placeholder='Ingrese el Nombre' value={nombres} onChange={(e) => setNombres(e.target.value)} />
            <input type="text" name="apellido" placeholder='Ingrese el Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <input type="number" name="legajo" placeholder='Ingrese el Legajo' value={legajo} onChange={(e) => setLegajo(e.target.value)} />
            <input type="text" name="usuario" placeholder='Ingrese el Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <input type="text" name="password" placeholder='Ingrese el Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <select name="tipoUsuario" onChange={(e) => setTipoUsuario(e.target.value)}>
              <option value="">Seleccione el tipo de usuario</option>
              <option  value={1} >Administrador</option>
              <option  value={2} >Usuario</option>
            </select>
            <label htmlFor="img">Carga de Foto de Perfil</label>
            <input type="file" name="img" id="img" onChange={e =>
              setFile(e.target.files[0])
            } />
            <input type='submit' className='btn' value='Guardar' />

          </form>

        </div>


      </>
    )
  }

  export default CargaUsuario