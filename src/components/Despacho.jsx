import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const Despacho = ({despacho}) => {

    const {nombre, direccion, documento, notas, id} = despacho;

    return (
        <tr>
            <td className='p-3 text-gray-800 font-bold'>{documento}</td>
            <td className='p-3'>
                <p><span className='text-gray-800  font-bold'>Cliente: </span>{nombre}</p>
                <p><span className='text-gray-800  font-bold'>Dirección: </span>{direccion}</p>
                <p><span className='text-gray-800  font-bold'>Nota: </span>{notas}</p>
            </td>
            <td className='p-3 '>

                <button
                    type='button'
                    className='bg-yellow-600 hover:bg-yellow-700 block w-full 
                    text-white p-2 uppercase font-bold  mt-3'
                ><FontAwesomeIcon icon={faEye} /></button>
                

                <button
                    type='button'
                    className='bg-green-600 hover:bg-green-700 block w-full 
                    text-white p-2 uppercase font-bold text-xs mt-3'
                >Editar</button>


                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 block w-full 
                    text-white p-2 uppercase font-bold text-xs mt-3'
                >Eliminar</button>

            </td>
        </tr>
    )
}

export default Despacho
