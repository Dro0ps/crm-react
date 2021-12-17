import React, { useState, useEffect } from 'react'
import Despacho from '../components/Despacho';



const Inicio = () => {

    const [despachos, setDespachos] = useState([]);

    useEffect(() => {
        const obtenerDespachosApi = async () => {
            try {
                const url = 'http://localhost:4000/despachos'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setDespachos(resultado)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDespachosApi();
        
    }, [])



    return (
        <>
            <h1 className='font-black text-4xl text-orange-900'>Despachos</h1>
            <p className='mt-3'>Administra tus Despachos</p>

            <table className='w-full mt-5 table-auto shadow bg-white '>
                <thead className='bg-orange-800 text-white'>
                    <tr>
                        <th className='p-2'>N°</th>
                        <th className='p-2'>Descripción</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {despachos.map( despacho => (
                        <Despacho
                            key={despacho.id}
                            despacho={despacho}
                        />
                    ))}
                </tbody>
            </table>            
            
        </>
    )
}

export default Inicio
