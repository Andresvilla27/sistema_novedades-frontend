import './index.css'
import { Outlet, Link } from 'react-router-dom';
import Carga from '../Carga/index'
import Lista from '../Lista';


// eslint-disable-next-line react/prop-types
function Home ({nombre, setNombre})  {
    const handleLogout = () => {
        setNombre([])
    }
    return (
        <div className='container-fluid home'>
            <img src="src/assets/img/logo-upm.jpeg" alt="logo-upm" className='logo-upm' />
            <img src="src/assets/img/logo-utm.jpeg" alt="logo-utm" className='logo-utm'/>
            <span>Usuario: {nombre} </span>
            <img src="src/assets/img/logo-policia-1.jpeg" alt="logo-policia" className='logo-policia-1'/>
            <button className='btn' onClick={handleLogout}>Logout</button>
            <h2>Sistema de Novedades</h2>
            <p>En este sitio usted podra realizar la carga de sus actividades,
                tambien podra visualizarlas en orden de registro.
            </p>
            <h5>A continuacion seleccione una opcion:</h5>
            <ul className="d-flex container-sm-12" >
                <li><Link className="btn btn-carga" to="/Carga" element={<Carga />} >Carga de Novedades</Link></li>
                <li><Link className="btn btn-lista " to="/Lista" element={<Lista />} >Lista de Novedades</Link></li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Home;