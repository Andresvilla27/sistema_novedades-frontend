

import axios from "axios";
import { useEffect, useState } from "react";
import '../Lista/index.css'

/* const URI = 'http://localhost:8000/novedades/' */
const URI = 'https://sistema-novedades-backend.vercel.app/novedades'


const Lista = () => {
    const [novedades, setNovedad] = useState([])
    useEffect(() => {
        getNovedades()
    }, [])

    const getNovedades = async () => {
        const res = await axios.get(URI)
        setNovedad(res.data)
    }

    const deleteNovedad = async (id) => {
        await axios.delete(`${URI}${id}`)
        getNovedades()
    }

    
    return (
        <>
            <div>
                <table className="table table-responsive">
                    <thead >
                        <tr className="titulos">
                            {/* <th scope="col" >Numero</th> */}
                            <th scope="col" >Fecha</th>
                            <th scope="col" >Lugar de Novedad</th>
                            <th scope="col" >Tipo de Novedad</th>
                            <th scope="col" >Comisaria Interviniente</th>
                            <th scope="col" >Unidad Interviniente</th>
                            <th scope="col" >Personal Interviniente</th>
                            <th scope="col" >Resumen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {novedades.map((novedad) => (
                            <tr key={novedad.id} className="contenido">
                                {/* <td> {novedad.id} </td> */}
                                <td> {novedad.fecha} </td>
                                <td> {novedad.lugar} </td>
                                <td> {novedad.tipoNovedad} </td>
                                <td> {novedad.comisaria} </td>
                                <td> {novedad.unidad} </td>
                                <td> {novedad.personalInterv} </td>
                                <td> {novedad.resumen} </td>
                                <button onClick={() => deleteNovedad(novedad.id)} className='btn btn-danger'><i className="fa-solid fa-delete-left"></i></button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Lista;