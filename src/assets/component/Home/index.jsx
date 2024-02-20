import './index.css'
import { Outlet, Link } from 'react-router-dom';
import Carga from '../Carga/index'
import Lista from '../Lista';


const Home = () => {
    return (
        <div className='container-fluid home'>
            <h2>Sistema de Novedades</h2>
            <p>En este sitio usted podra realizar la carga de sus actividades,
                tambien podra visualizarlas en orden de registro y al final elaborar un informe.
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