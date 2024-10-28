import './index.css'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';



// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({ user, setUser }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        setUser('')
        navigate('/')
    }
 
    return (
        <>
                <div className='container-fluid  home'>
                    <div className='nav'>
                        <span className='logos'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/novedades-identificaciones.appspot.com/o/img_logo%2Flogo-upm.jpeg?alt=media&token=32a16b6b-8ccd-428d-beed-2cf253980737" alt="logo-upm" className='logo-upm' />
                            <img src="https://firebasestorage.googleapis.com/v0/b/novedades-identificaciones.appspot.com/o/img_logo%2Flogo-utm.jpeg?alt=media&token=f51010f5-6504-452e-ba85-5eca4e698b2c" alt="logo-utm" className='logo-utm' />
                            <img src="https://firebasestorage.googleapis.com/v0/b/novedades-identificaciones.appspot.com/o/img_logo%2Flogo-policia-1.jpeg?alt=media&token=5efa1e29-f748-4f59-82d3-2a472ef93d40" alt="logo-policia-1" className='logo-policia-1' />
                        </span>
                        <button className='btn btn-logout' onClick={handleLogout}>Cerrar Sesion</button>
                    </div>
                    <h1 className="titulo">Sistema de Novedades</h1>
                    <p className='descripcion'>En este sitio usted podra realizar la carga de novedades de relevancia, identificacion de personas. Tambien podra consultar las novedades surgidas en un periodo de 14 dias, y las identificaciones en un periodo de 30 dias.
                    </p>
                    <h4>A continuacion seleccione una opcion:</h4>
                    <ul className="d-flex" >
                        <li><Link className="btn btn-carga" to="/Carga"  >Carga de Novedades</Link></li>
                        <li><Link className="btn btn-lista" to="/Lista"  >Lista de Novedades</Link></li>
                        <li><Link className='btn btn-carga' to="/CargaIdent" >Carga de Identificaciones</Link></li>
                        <li><Link className='btn btn-lista' to="/ListaIdent" >Lista de Identificaciones</Link></li>
                        {user === 1 &&
                            <li><Link className='btn btn-carga' to="/CargaUsuario" >Crear Usuario</Link></li>
                        }
                        {
                            user === 1 &&
                            <li><Link className='btn btn-carga' to="/ListaUsuario" >Lista de Usuarios</Link></li>
                        }
                    </ul>
                    <hr />
                    <Outlet />
                    <footer>
                        <p className='footer'>Desarrollado por Andres Villafañe</p>
                    </footer>
                </div>
          

        </>
    )
}

export default Home;