import './index.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//desarrollo local
const URI = 'http://localhost:8000/students/';
//desarrollo en produccion
/* const URI = 'https://sistema-novedades-backend.onrender.com/novedades/' */

const CargaAlumno = () => {
    const [nombres, setNombres] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [grado, setGrado] = useState('');
    const [tutor, setTutor] = useState('');
    const [telefono, setTelefono] = useState('');
    const [observaciones, setObservaciones] = useState('');
    const [loading, setLoading] = useState(false);  // Estado para manejar el spinner
    const [error, setError] = useState('');  // Estado para manejar errores
    const navigate = useNavigate();

    //procedimiento para guardar el alumno
    const store = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await axios.post(URI, {
                nombres,
                apellido,
                dni,
                domicilio,
                grado,
                tutor,
                telefono,
                observaciones,
            });
            navigate('/Lista');
        } catch (error) {
            setError('Ocurrió un error al cargar el alumno. Inténtalo nuevamente.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form method="post" className="form-register" onSubmit={store}>
                <h4 className="form-titulo">Carga de Alumno</h4>
                <div className="contenedor">
                    <input
                        type="text"
                        name="nombres"
                        id="nombres"
                        placeholder="Nombres"
                        required
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                    />
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder="Apellido"
                        required
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <input
                        type="number"
                        name="dni"
                        id="dni"
                        placeholder="DNI"
                        required
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
                    <input
                        type="text"
                        name="domicilio"
                        id="domicilio"
                        placeholder="Domicilio"
                        value={domicilio}
                        onChange={(e) => setDomicilio(e.target.value)}
                    />

                    <select onChange={(e) => setGrado(e.target.value)} required>
                        <option value="">Seleccione el Grado/Año</option>
                        <option value="Sala de 3">Sala de 3</option>
                        <option value="Sala de 4">Sala de 4</option>
                        <option value="Sala de 5">Sala de 5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="1° Ciclo Basico">1° Ciclo Basico</option>
                        <option value="2° Ciclo Basico">2° Ciclo Basico</option>
                        <option value="3° Ciclo Basico">3° Ciclo Basico</option>
                    </select>

                    <input
                        type="text"
                        id="tutor"
                        name="tutor"
                        placeholder="Tutor"
                        required
                        value={tutor}
                        onChange={(e) => setTutor(e.target.value)}
                    />
                    <input
                    type="number"
                    name="telefono"
                    id="telefono"
                    placeholder="Ingrese el telefono"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    maxLength={10}
                />
                    <input
                        type="text"
                        name="observaciones"
                        id="observaciones"
                        placeholder="Ingrese observaciones necesarias"
                        value={observaciones}
                        onChange={(e) => setObservaciones(e.target.value)}
                    />

                    {loading ? (
                        <p>Cargando...</p>  // Spinner mientras se envían los datos
                    ) : (
                        <input type="submit" value="Cargar" className="btn btn-enviar" />
                    )}
                    {error && <p className="error">{error}</p>} 
                </div>
            </form>
        </div>
    );
};

export default CargaAlumno;
