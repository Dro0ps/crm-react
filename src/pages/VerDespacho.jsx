import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';

const VerDespacho = () => {

    const [despacho, setDespacho] = useState();

    //Lee el id que tengamos en la url: hooks useParams
    const {id} = useParams();
    
    const url = `http://localhost:4000/despachos/${id}`
    
    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                
                 await setDespacho(resultado);
                 
            } catch (error) {
                console.log(error)
            }
        }

        obtenerClienteAPI();

    }, [])


    return (
        <div>

            <h1 className='font-black text-4xl text-orange-900'>Vista Despacho</h1>
            <p className='mt-3'></p>

                { despacho ?

                <>
                    <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Nombre: </span>
                    {despacho.nombre}
                    </p>

                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Dirección: </span>
                        {despacho.direccion}
                    </p>
                    

                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">n° documento: </span>
                        {despacho.documento}
                    </p>
                    

                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Nota: </span>
                        {despacho.notas}
                    </p>  

                </>

                :

                <h1>Cargando</h1>
            
                }

             
           
        </div>
    )
}

export default VerDespacho
