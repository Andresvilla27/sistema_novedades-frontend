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
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-policia.appspot.com/o/img%2Flogo-upm.jpeg?alt=media&token=d4935716-0cdb-4113-9270-98fdf221a8ce" alt="logo-upm" className='logo-upm' />
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-policia.appspot.com/o/img%2Flogo-utm.jpeg?alt=media&token=e17d0349-8923-45b3-9f4f-f62eaa1f9c45" alt="logo-utm" className='logo-utm' />
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-policia.appspot.com/o/img%2Flogo-policia-1.jpeg?alt=media&token=ea3822c9-6c5c-4cea-9940-2f0f0e34ad62" alt="logo-policia" className='logo-policia-1' />
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