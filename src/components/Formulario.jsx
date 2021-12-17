import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom'; // para redireccionar



const Formulario = () => {

    const navigate = useNavigate();

    // Definimos la forma que tendran los datos recibidos por el formulario con yup y shape
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre del cliente es Obligatorio'),
        direccion: Yup.string().required('La Dirección es Obligatoria'),
        documento: Yup.string().required('El Numero del documento es Obligatorio'),
        notas: Yup.string().required('Debe Agregar una nota o intrucciones del Despacho')
    })

    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/despachos'

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)

            navigate('/despachos')//Redirecciona al usuario a otra ventana

        } catch (error) {
            console.log(error);
        }
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
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values);
                    // resetForm para reiniciar el formulario
                    resetForm();
                }}
                validationSchema={nuevoClienteSchema} // LLamamos a la función que validara el formulario 
            >
                {({errors, touched}) => {
                    /* console.log(data) */
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
                        {errors.nombre && touched.nombre ?
                            (<Alerta>{errors.nombre}</Alerta> )
                            : null
                        }
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
                        {errors.direccion && touched.direccion ?
                            (<Alerta>{errors.direccion}</Alerta> )
                            : null
                        }
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
                        {errors.documento && touched.documento ?
                            (<Alerta>{errors.documento}</Alerta> )
                            : null
                        }
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
                        {errors.notas && touched.notas ?
                            (<Alerta>{errors.notas}</Alerta> )
                            : null
                        }
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
