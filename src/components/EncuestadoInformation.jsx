import React, { useState } from 'react'
import '../styles/EncuestadoInformation.scss';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

export const EncuestadoInformation = () => {
  
  const [nombre, setNombre]= useState('')
  const [phone, setPhone]= useState('')
  const [email, setEmail]= useState('')
  const [cedula, setCedula]= useState('')
  const [direccion, setDireccion]= useState('')
  const [edificacion, setEdificacion]= useState('')
  const [departamento, setDepartamento]= useState('')
  const [municipio, setMunicipio]= useState('')
  const [barrio, setBarrio]= useState('')
  const [escolaridad, setEscolaridad]= useState('')


  const navigate= useNavigate()

  console.log(escolaridad);

  const handleSubmit= async() => {
    
    await fetch(`http://127.0.0.1:5000/personal-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify({
        "cedula": cedula,
        "nombre_apellido": nombre,
        "email": email,
        "direccion": direccion,
        "unidad": edificacion,
        "departamento": departamento,
        "municipio": municipio,
        "barrio": barrio,
        "phone": phone,
        "escolaridad": escolaridad
      })
    }) 
      .then(res => res.json())
      .then(res => {
        console.log(res)
        navigate('/encuesta')
        Swal.fire({
          title:"Empezamos con la encuesta",
          text: "ahora si vamos a emepzar con la encuesta",
          icon: 'question'
        })
      })
      .catch(e => console.log("error"))
  }

  return (
    <>
      <h2 className='form-title'>Información personal</h2>
      <form className='form-group' onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite su nombre y apellido' onChange={e => setNombre(e.target.value)} required className='form-control' />
        <input type="tel" placeholder='Digite su numero de telefono' onChange={e => setPhone(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite su correo electrónico' onChange={e => setEmail(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite su numero de cedula' onChange={e => setCedula(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite su dirección' onChange={e => setDireccion(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite nombre de la unidad o edificación (opcional)' onChange={e => setEdificacion(e.target.value)} className='form-control' />
        <input type="text" placeholder='Digite departamento ' onChange={e => setDepartamento(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite municipio' onChange={e => setMunicipio(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite barrio' onChange={e => setBarrio(e.target.value)} required className='form-control' />
        <div>
          <label htmlFor='select' value className='label'>Seleccione su nivel de escolaridad: </label>
          <select id='select' required onChange={e => setEscolaridad(e.target.value)} name='escolaridad' className='form-control'>
            <option disabled value='none' >Seleccione su nivel de escolaridad</option>
            <option value="primaria">Primaria</option>
            <option value="bachillerato">Bachillerato</option>
            <option value="tecnico">Técnico</option>
            <option value="tecnologo">Tecnólogo</option>
            <option value="universitario">Universitario</option>
            <option value="ninguno">Ninguno</option>
          </select>
        </div>
        <label className='form-control-label'><input type="checkbox" className='checkbox' required /> Autorizo el tratamiendo de mis datos</label>
        <button className='form-control btn'>Enviar</button>
      </form>
    </>
  )
}
