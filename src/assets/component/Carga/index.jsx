
/* eslint-disable no-undef */

import './index.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/novedades/'

const Carga = () => {
    const [fecha, setFecha] = useState('')
    const [lugar, setLugar] = useState('')
    const [tipoNovedad, setTipoNovedad] = useState('')
    const [comisaria, setComisaria] = useState('')
    const [unidad, setUnidad] = useState('')
    const [personalInterv, setPersonalInterv] = useState('')
    const [resumen, setResumen] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
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
        <>
            <form className="container" onSubmit={store}>
                <div className='lugar_fecha'>
                    <label htmlFor="fecha">Seleccione la fecha</label>
                    <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    <br />
                    <label htmlFor="lugar" id='lugar_novedad'>Lugar de Novedad</label>
                    <input type="text" id='lugar' value={lugar} onChange={(e) => setLugar(e.target.value)} />
                    <br />
                    <label htmlFor="tipo_novedad">Tipo de Novedad</label>
                    <input id="tipo_novedad" type='text' value={tipoNovedad} onChange={(e) => setTipoNovedad(e.target.value)} />
                </div>
                <div className='personal_unidad'>
                    <label htmlFor="comisaria">Comisaria de Competencia</label>
                    <input type='text' id='comisaria' value={comisaria} onChange={(e) => setComisaria(e.target.value)} />
                    <br />
                    <label htmlFor="unidad">Numero de Unidad</label>
                    <input id='unidad' type='text' value={unidad} onChange={(e) => setUnidad(e.target.value)} />
                    <br />
                    <label htmlFor="personal">Personal Interviniente</label>
                    <input type="text" id="personal" value={personalInterv} onChange={(e) => setPersonalInterv(e.target.value)} />
                </div>
                <div className='resumen'>
                    <label htmlFor='resumen_novedad' >Resumen de Novedad</label>
                    <textarea type="text" id="resumen_novedad" value={resumen} onChange={(e) => setResumen(e.target.value)} />
                </div>
                <button className='btn btn-save' type="submit" >Guardar</button>
            </form>
        </>
    )
}

export default Carga;