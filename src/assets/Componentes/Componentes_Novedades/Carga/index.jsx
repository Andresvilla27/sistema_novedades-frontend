
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
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    //procedimiento para guardar la novedad
    const store = async (e) => {
        e.preventDefault()
        setIsLoading(true);
        try {
        await axios.post(URI, {
            fecha: fecha,
            lugar: lugar,
            tipoNovedad: tipoNovedad,
            comisaria: comisaria,
            unidad: unidad,
            personalInterv: personalInterv,
            resumen: resumen
        })
        setIsLoading(false);
        navigate('/Lista')
    } catch (error){
        console.error(error);
        setIsLoading(false);
    }
    }
    

    return (
        <><div>
            {isLoading && (
        <div className="modal" id="loadingModal" tabIndex="-1" aria-labelledby="loadingModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2">Cargando...</p>
              </div>
            </div>
          </div>
        </div>
      )}
            <form method="post" className="form-register" onSubmit={store}>
                <h4 className="form-titulo">Carga de Novedad</h4>
                <div className="contenedor ">
                    <label htmlFor="fecha" className='fecha_label' >Fecha Actual</label>
                    <input type="date" name="fecha" placeholder="fecha" required value={fecha} onChange={(e) => setFecha(e.target.value)} />
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
                        <option value="U-1109">U-1109</option>
                        <option value='U-1111'>U-1111</option>
                        <option value="MT-158">MT-158</option>
                        <option value="MT.598">MT-598</option>
                        <option value="MT-624">MT-624</option>
                        <option value="MT-649">MT-649</option>
                        <option value="MT-653">MT-653</option>
                        <option value='MT-858'>MT-843</option>
                        <option value='MT-939'>MT-844</option>
                        <option value="MT-939">MT-939</option>
                        <option value="MT-857">MT-857</option>
                        <option value="MT-858">MT-858</option>
                        <option value='MT-940'>MT-940</option>
                        <option value="MT-954">MT-954</option>
                        <option value='MT-955'>MT-955</option>
                        <option value='MT-962'>MT-962</option>
                        <option value="UB-99">UB-99</option>
                        <option value="UB-100">UB-100</option>
                        <option value="UB-101">UB-101</option>
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