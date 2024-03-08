import './index.css'
import { Outlet, Link } from 'react-router-dom';
import Carga from '../Carga/index'
import Lista from '../Lista';




// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({ user, setUser }) {


    const handleLogout = () => {
        setUser([])
    }

    
    return (
        <div className='container-fluid  home'>
            <div className='nav'>
                <span className='logos'>
                    <img src="src/assets/img/logo-upm.jpeg" alt="logo-upm" className='logo-upm' />
                    <img src="src/assets/img/logo-utm.jpeg" alt="logo-utm" className='logo-utm' />
                    <img src="src/assets/img/logo-policia-1.jpeg" alt="logo-policia" className='logo-policia-1' />
                </span>
                    <button className='btn btn-logout' onClick={handleLogout}>Logout</button>
            </div>
            <h2>Sistema de Novedades</h2>
            
            <p>En este sitio usted podra realizar la carga de sus actividades,
                tambien podra visualizarlas en orden de registro.
            </p>
            <h5>A continuacion seleccione una opcion:</h5>
            <ul className="d-flex" >
                <li><Link className="btn btn-carga" to="/Carga" element={<Carga />} >Carga de Novedades</Link></li>
                <li><Link className="btn btn-lista " to="/Lista" element={<Lista />} >Lista de Novedades</Link></li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Home;