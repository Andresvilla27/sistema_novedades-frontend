import './index.css'
import { Outlet, Link, useNavigate } from 'react-router-dom';
/* import Carga from '../Carga/index'
import Lista from '../Lista';
import CargaIdent from '../../identificacionComponent/CargaIdent/CargaIdent';
import ListaIdent from '../../identificacionComponent/ListaIdent';
 */
import { useEffect } from 'react';




// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({user, setUser}) {
    const navigate = useNavigate();

    useEffect(()=>{
        if (!user) {
            navigate('/');
        }
    },[user, navigate]);
    
    const handleLogout = () => {
        setUser('')
        navigate('/')
    }


    return (
        <div className='container-fluid  home'>
            <div className='nav'>
                <span className='logos'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-prevencion.appspot.com/o/img_logo%2Flogo-upm.jpeg?alt=media&token=59d51466-5f94-4537-ae96-b1db10564cbc" alt="logo-upm" className='logo-upm' />
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-prevencion.appspot.com/o/img_logo%2Flogo-utm.jpeg?alt=media&token=f945d979-1c8b-4ee2-800a-206809ad20bf" alt="logo-utm" className='logo-utm' />
                    <img src="https://firebasestorage.googleapis.com/v0/b/novedades-prevencion.appspot.com/o/img_logo%2Flogo-policia-1.jpeg?alt=media&token=050caf7d-1529-48aa-8f6e-c16f12c140eb" alt="logo-policia" className='logo-policia-1' />
                </span>
                    <button className='btn btn-logout' onClick={handleLogout}>Cerrar Sesion</button>
            </div>
            <h1 className="titulo">Sistema de Novedades</h1>
            <p className='descripcion'>En este sitio usted podra realizar la carga de novedades de relevancia, identificacion de personas. Tambien podra consultar las novedades surgidas en un periodo de 7 dias, y las identificaciones en un periodo de 30 dias.
            </p>
            <h4>A continuacion seleccione una opcion:</h4>
            <ul className="d-flex" >
                <li><Link className="btn btn-carga" to="/Carga"  >Carga de Novedades</Link></li>
                <li><Link className="btn btn-lista" to="/Lista"  >Lista de Novedades</Link></li> 
                <li><Link className='btn btn-carga' to="/CargaIdent" >Carga de Identificaciones</Link></li>
                <li><Link className='btn btn-lista' to="/ListaIdent" >Lista de Identificaciones</Link></li>
            {user=== 1 &&
                <li><Link className='btn btn-carga' to="/CargaUsuario" >Crear Usuario</Link></li>
            }
            {
                user === 1 && 
                <li><Link className='btn btn-carga' to="/ListaUsuario" >Lista de Usuarios</Link></li>
            }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Home;