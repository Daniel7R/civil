import React, { useState, useContext } from 'react'
import { Context } from '../hooks/useCedula'
import '../styles/EncuestadoInformation.scss';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import {BiUserPin} from 'react-icons/bi'
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api'

const API_KEY_GOOGLE= process.env.GOOGLE_MAPS_API_KEY

export const EncuestadoInformation = () => {
  
  const [primerNombre, setPrimerNombre]= useState('')
  const [segundoNombre, setSegundoNombre]= useState('')
  const [primerApellido, setPrimerApellido]= useState('')
  const [segundoApellido, setSegundoApellido]= useState('')
  const [phone, setPhone]= useState('')
  const [email, setEmail]= useState('')
  const {cedula, setCedula}= useContext(Context)
  const [direccion, setDireccion]= useState('')
  const [edificacion, setEdificacion]= useState('')
  const [departamento, setDepartamento]= useState('')
  const [municipio, setMunicipio]= useState('')
  const [barrio, setBarrio]= useState('')
  const [escolaridad, setEscolaridad]= useState('')
  const [latitud, setLatitud]=useState(-6.2592696)
  const [longitud, setLongitud]=useState(-75.5858773)


  //para redireccionar
  const navigate= useNavigate()


  // Aqui va toda la funcionalidad de la api de google maps
  function success(pos) {
    var crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    setLatitud(crd.latitude)
    console.log(`Longitude: ${crd.longitude}`);
    setLongitud(crd.longitude)
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  const defaultCenter= {
    lat: parseFloat(latitud),
    lng: parseFloat(longitud)
  }
  const get = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(result => {
          if (result.state === 'granted') {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success)
          } else if (result.state === 'prompt') {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(success)
          } else if (result.state === 'denied') {
            console.log(result.state);
          }
          result.onchange = () => {
            console.log(result.state);
          }
        })
    } else {
      alert("Lo sentimos, no disponible")
      Swal.fire({
        icon:'error',
        title: "Error",
        text: "lo sentimos, no disponible :/"
      })
    }
  }

  const handleSubmit= async(e) => {
    
    e.preventDefault()
    await fetch(`http://127.0.0.1:5000/personal-info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify({
        "cedula": cedula,
        "primer_nombre": primerNombre,
        "segundo_nombre": segundoNombre,
        "primer_apellido": primerApellido,
        "segundo_apellido": segundoApellido,
        "email": email,
        "direccion": direccion,
        "unidad": edificacion,
        "departamento": departamento,
        "municipio": municipio,
        "barrio": barrio,
        "phone": phone,
        "escolaridad": escolaridad,
        "latitud": latitud,
        "longitud": longitud
      })
    }) 
      .then(res => res.json())
      .then(res => {
        console.log(res)
        navigate('/encuesta')
        Swal.fire({
          title:"Empezamos con la encuesta",
          text: "ahora si vamos a empezar con la encuesta",
          icon: 'question'
        })
      })
      .catch(e => console.log("error"))
  }

  return (
    <>
      <BiUserPin size={"90px"} />
      <h2 className='form-title'>Información personal</h2>
      <form className='form-group' onSubmit={ handleSubmit }>
        <input type="text" placeholder='Digite su primer nombre' onChange={e => setPrimerNombre(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite su segundo nombre (opcional)' onChange={e => setSegundoNombre(e.target.value)} className='form-control' />
        <input type="text" placeholder='Digite su primer apellido' onChange={e => setPrimerApellido(e.target.value)} required className='form-control' />
        <input type="text" placeholder='Digite su segundo apellido' onChange={e => setSegundoApellido(e.target.value)} required className='form-control' />
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
          <select id='select' required onChange={e => setEscolaridad(e.target.value)} name='escolaridad' className='form-control select'>
            <option disabled selected hidden value={'none'} >Seleccione su nivel de escolaridad</option>
            <option value="primaria">Primaria</option>
            <option value="bachillerato">Bachillerato</option>
            <option value="tecnico">Técnico</option>
            <option value="tecnologo">Tecnólogo</option>
            <option value="universitario">Universitario</option>
            <option value="ninguno">Ninguno</option>
          </select>
        </div>
        <div style={{width: "60%", marginBottom: "30px"}}>
          <label className='label'>Ubicación: </label>
          <button className='btn-ubicacion' onClick={get} type="button" >Obtener ubicación</button>
          <div>
          <LoadScript googleMapsApiKey={API_KEY_GOOGLE}>
            <GoogleMap mapContainerStyle={{height: "200px", width: "100%",textAlign:"center"}}
              zoom={10}
            center={defaultCenter}>
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
        </div>
        <label className='form-control-label'><input type="checkbox" className='checkbox' required /> Autorizo el tratamiendo de mis datos</label>
        <button className='form-control btn'>Enviar</button>
      </form>
    </>
  )
}
