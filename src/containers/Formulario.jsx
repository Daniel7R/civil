import React, { useState } from 'react'
import '../styles/Formulario.scss'
import { AiOutlineForm } from 'react-icons/ai'
import ImagenLadera from '../assets/images-form/Ladera.jpg'
import ImagenValle from '../assets/images-form/Valle.jpg'

export const Formulario = () => {

  //Acá se guardan los datos de todos los campos
  const [anio, setAnio]= useState(null)
  const [constructora, setConstructora]= useState(0)
  const [nombreConstructora, setNombreConstructora]= useState('')
  const [area, setArea]= useState(null)
  //Aqui falta la imagen de la pregunta 5
  const [ubicacion, setUbicacion]= useState(null)
  const [elementosCercanos, setElementosCercanos]= useState(null)
  const [usoActual, setUsoActual]= useState(null)

  console.log(elementosCercanos);
  
  return (
    <>
    <h1>Encuesta</h1>
    <AiOutlineForm size={"90px"} />
    <form className='form-group'>
      
        <label className='pregunta'><b>1) </b>Año de construcción de la vivienda:</label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input  name='q-1' type="radio" onClick={(e)=>setAnio(e.target.value)} value={4} />Antes de 1963
          </label>
          <label className='seleccion' >
            <input  name='q-1' type="radio" onClick={(e) => setAnio(e.target.value)} value={3} />Entre 1963 y 1984
          </label>
          <label className='seleccion' >
            <input  name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={3} />Entre 1985 y 1997
          </label>
          <label className='seleccion' >
            <input  name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={2} />Entre 1998 y 2010
          </label>
          <label className='seleccion' >
            <input  name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={1} />A partir de 2001
          </label>
        </div>
        <label className='pregunta'><b>2) </b>¿Fue construida por  alguna entidad o empresa constructora? </label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={ e => setConstructora(e.target.value)} value={0} />Si
          </label>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={e => setConstructora(e.target.value)} value={3} />No
          </label>
        </div>
       <div className='respuestas opcional'>
          <label className='pregunta'><b>3) </b>Nombre de la empresa constructora(opcional): </label> 
          <input type="text" onChange={e => setNombreConstructora(e.target.value)} value={nombreConstructora} placeholder='Digite el nombre de la empresa o entidad' />
        </div>
        <label className='pregunta'><b>4) </b>Área de la vivienda:  </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="20 a 30m^2"/> 20 a 30 m^2
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' value="31 a 40 m^2" /> 31 a 40 m^2
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' value="41 a 60 m^2" /> 41 a 60 m^2
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' value="61 a 80 m^2" /> 61 a 80 m^2 
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' value="81 a 90 m^2" /> 81 a 90 m^2
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-4' value="91 m^2 o mayor" /> 91 m^2 o mayor
          </label>
        </div>
        <label className='pregunta'><b>5) </b>Imagen del frente de la vivienda: </label>
        <input type="file" name='q-5'  accept='image/*' />
        <label className="pregunta"><b>6) </b>Ubicación de la vivienda</label>
        <div className="respuestas">
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-6' value={2} /><p>Ladera</p> 
            <img src={ImagenLadera} onClick={e => setUbicacion(e.target.value) } alt="imagen ladera" className="img-ubicacion" />
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-6' onClick={e => setUbicacion(e.target.value) } value={1} /><p>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
        </div>
        <label className='pregunta'><b>7) </b>Elementos cercanos a la vivienda</label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type="radio" onClick={e => setElementosCercanos(e.target.value)} name='q-7' value={2} />Quebrada
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-7' value={1} onClick={e => setElementosCercanos(e.target.value)} /><p style={{textAlign: "start"}}>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-7' value={2} onClick={e => setElementosCercanos(e.target.value)} />Montaña
          </label>
        </div>
        <label className='pregunta'><b>8) </b>El uso actual predominante de la vivienda es: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-8' onClick={e => setUsoActual(e.target.value)} value={0} />Residencial
          </label>
          <label className="seleccion">
              <input type="radio" name='q-8' value={1} onClick={e => setUsoActual(e.target.value)} />Comercial
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={2} onClick={e => setUsoActual(e.target.value)} />Educacional
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={2} onClick={e => setUsoActual(e.target.value)} />Oficinas
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={3} onClick={e => setUsoActual(e.target.value)} />Bodegas
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={3} onClick={e => setUsoActual(e.target.value)} />Instalación deportiva
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={2} onClick={e => setUsoActual(e.target.value)} />Centro de Salud
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={4} onClick={e => setUsoActual(e.target.value)} />Industrial
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={2} onClick={e => setUsoActual(e.target.value)} />Hotelero
          </label>
          <label className='seleccion'>
            <input type="radio" onClick={e => setUsoActual(e.target.value)} value={0} />Otro:  
            <input type="text" placeholder='Digite' />
          </label>
        </div>
    </form>
    </>
  )
}
