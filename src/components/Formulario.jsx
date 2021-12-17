import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Formulario = () => {

    // Definimos la forma que tendran los datos recibidos por el formulario con yup y shape
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre del cliente es Obligatorio'),
        direccion: '',
        documento: '',
        notas: ''
    })

    const handleSubmit = (valores) => {
        console.log(valores);
    }


    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase 
            text-center'>Agregar Despacho</h1>


            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    documento: '',
                    notas: ''
                }}
                onSubmit={ (values) => {
                    handleSubmit(values);
                }}
                validationSchema={nuevoClienteSchema} // LLamamos a la función que validara el formulario 
            >
                {(data) => {
                    console.log(data)
                    return (
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='nombre'
                        >Cliente:</label>
                        <Field
                            type="text"
                            id='nombre'
                            name='nombre'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Nombre del Cliente "
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='direccion'
                        >Dirección:</label>
                        <Field
                            type="text"
                            id='direccion'
                            name='direccion'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Dirección de Envio"
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='documento'
                        >Numero de Documento:</label>
                        <Field
                            type="number"
                            id='documento'
                            name='documento'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Boleta / Factura / Guia"
                        />
                    </div>
                    
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='notas'
                        >Notas:</label>
                        <Field
                            as='textarea'
                            type="text"
                            id='notas'
                            name='notas'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Mensaje "
                        />
                    </div>

                    <input
                        type='submit'
                        value='Agregar Despacho'
                        className='mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer hover:text-orange-300 transition-colors'
                    />
                    
                    
                    
                </Form>
                )}}
            </Formik>
        </div>
    )
}

export default Formulario
