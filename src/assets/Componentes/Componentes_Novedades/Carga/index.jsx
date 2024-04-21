
/* eslint-disable no-undef */

import './index.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


//desarrollo local
/* const URI = 'http://localhost:8000/novedades/' */

//desarrollo en produccion
const URI = 'https://sistema-novedades-backend.onrender.com/novedades/'



const Carga = () => {
    const [fecha, setFecha] = useState('')
    const [lugar, setLugar] = useState('')
    const [tipoNovedad, setTipoNovedad] = useState('')
    const [comisaria, setComisaria] = useState('')
    const [unidad, setUnidad] = useState('')
    const [personalInterv, setPersonalInterv] = useState('')
    const [resumen, setResumen] = useState('')
    const navigate = useNavigate()

    //procedimiento para guardar la novedad
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            fecha: fecha,
            lugar: lugar,
            tipoNovedad: tipoNovedad,
            comisaria: comisaria,
            unidad: unidad,
            personalInterv: personalInterv,
            resumen: resumen
        })
        navigate('/Lista')
    }
    return (
        <><div>
            <form method="post" className="form-register" onSubmit={store}>
                <h4 className="form-titulo">Carga de Novedad</h4>
                <div className="contenedor ">
                    <input type="date" id="fecha" name="fecha" placeholder="fecha" required value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    <input type="text" id="lugar" name="lugar" placeholder="lugar" required value={lugar} onChange={(e) => setLugar(e.target.value)} />
                    <input type="tipo_novedad" id="tipo_novedad" name="tipo_novedad" placeholder="tipo de novedad" required value={tipoNovedad} onChange={(e) => setTipoNovedad(e.target.value)} />
                    <select onChange={(e) => setComisaria(e.target.value)}>
                        <option >Seleccione Comisaria</option>
                        <option value='12'>12</option>
                        <option value='13' >13</option>
                        <option value='15' >15</option>
                        <option value='47' >47</option>
                        <option value='Mujer y Familia N° 2' >Mujer y Familia N° 2</option>
                    </select>
                    <select required onChange={(e) => setUnidad(e.target.value)}>
                        <option >Seleccione Unidad</option>
                        <option value='U-1075'>U-1075</option>
                        <option value='U-1077'>U-1077</option>
                        <option value='U-1078'>U-1078</option>
                        <option value='U-1079'>U-1079</option>
                        <option value='U-1111'>U-1111</option>
                        <option value='MT-858'>MT-858</option>
                        <option value='MT-939'>MT-939</option>
                        <option value='MT-940'>MT-940</option>
                        <option value='MT-955'>MT-955</option>
                        <option value='MT-962'>MT-962</option>
                    </select>
                    <input type="text" id="personal_interviniente" name="personal_interviniente" placeholder="Personal Interviniente" required value={personalInterv} onChange={(e) => setPersonalInterv(e.target.value)} />
                    <textarea type="text" name="resumen" id="resumen" placeholder='Resumen de Novedad' value={resumen} onChange={(e) => setResumen(e.target.value)} required/>
                    <input type="submit" value="Cargar" className=" btn btn-enviar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default Carga;