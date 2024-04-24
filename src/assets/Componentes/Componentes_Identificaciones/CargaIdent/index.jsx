import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { upLoadFile } from '../../../../firebase';
import './index.css'



//desarrollo local
/* const URI = 'http://localhost:8000/identificaciones/'  */

//produccion
const URI = 'https://sistema-novedades-backend.onrender.com/identificaciones/'


const CargaIdent = () => {


  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [dni, setDni] = useState('')
  const [edad, setEdad] = useState('')
  const [alias, setAlias] = useState('')
  const [fecha_nac, setFecha_nac] = useState('')
  const [domicilio, setDomicilio] = useState('')
  const [ocupacion, setOcupacion] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [file, setFile] = useState('')
  const navigate = useNavigate()


  //procedimiento guardar la identificacion
  const store = async (e) => {
    e.preventDefault();
    try {

      const imageUrl = await upLoadFile(file)
      await axios.post(URI, {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        edad: edad,
        alias: alias,
        fecha_nac: fecha_nac,
        domicilio: domicilio,
        ocupacion: ocupacion,
        estadoCivil: estadoCivil,
        img: imageUrl
      });
      navigate('/ListaIdent')
    } catch (error) {
      console.error("Error al cargar identificacion", error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={store} >
          <h4 className="form-titulo">Carga de Identificacion</h4>
          <input type="text" name="nombres" placeholder='Ingrese el Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="text" name="apellido" placeholder='Ingrese el Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type="number" name="dni" placeholder='Ingrese el DNI' value={dni} onChange={(e) => setDni(e.target.value)} />
          <input type="number" name="edad" placeholder='Ingrese la Edad' value={edad} onChange={(e) => setEdad(e.target.value)} />
          <input type="text" name="alias" placeholder='Ingrese el Alias' value={alias} onChange={(e) => setAlias(e.target.value)} />
          <input type="date" name="fecha_nac" placeholder='Ingrese la Fecha' value={fecha_nac} onChange={(e) => setFecha_nac(e.target.value)} />
          <input type="text" name="domicilio" placeholder='Ingrese el Domicilio' value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
          <input type="text" name="ocupacion" placeholder='Ingrese la Ocupacion' value={ocupacion} onChange={(e) => setOcupacion(e.target.value)} />
          <select onChange={(e) => setEstadoCivil(e.target.value)}>
            <option value="">Seleccione Estado Civil</option>
            <option value="soltero/a">Soltero/a</option>
            <option value="casado/a">Casado/a</option>
            <option value="viudo/a">Viudo/a</option>
            <option value="separado/a">Separado/a</option>
          </select>
          <label htmlFor="img">Carga de Imagen</label>
          <input type="file" name="img" id="img" onChange={e =>
            setFile(e.target.files[0])
          } />
          <input type='submit' className='btn' value='Guardar' />
        </form>
      </div>
    </>
  )
};
export default CargaIdent;