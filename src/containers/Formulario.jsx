import React, { Fragment, useContext, useEffect, useState } from 'react'
import '../styles/Formulario.scss'
import { AiOutlineForm } from 'react-icons/ai'
import ImagenLadera from '../assets/images-form/Ladera.jpg'
import ImagenValle from '../assets/images-form/Valle.jpg'
import ImagenMamposteria from '../assets/images-form/mamposteria.png'
import ImagenPrefabricado from '../assets/images-form/Prefabricado.jpg'
import ImagenTapia from '../assets/images-form/Tapia.jpg'
import ImagenMamposteriaReforzda from '../assets/images-form/mamposteria reforzada.png'
import ImagenContretoPortico from '../assets/images-form/Concreto portico.jpg'
import ImagenPrefabricadoYeso from '../assets/images-form/Yeso.jpg'
import ImagenPrefabricadoMadera from '../assets/images-form/Madera.jpg'
import ImagenPrefabricadoPVC from '../assets/images-form/PVC.jpg'
import ImagenPrefabricadoDrywall from '../assets/images-form/Drywall.jpg'
import ImagenPrefabricadoFibrocemento from '../assets/images-form/Fibrocemento.png'
import ImagenLosaConcretoAligerado from '../assets/images-form/Piso aligerado.jpg'
import ImagenLosaConcretoMaciza from '../assets/images-form/Piso maciza.jpg'
import ImagenPisoVigasMadera from '../assets/images-form/Viga madera.png'
import ImagenPisoVigasAcero from '../assets/images-form/Viga acero.jpg'
import ImagenZinc from '../assets/images-form/Zinc.jpg'
import ImagenPlancha from '../assets/images-form/Plancha.jpg'
import ImagenPlacaFacil from '../assets/images-form/Placa facil.jpg'
import ImagenEternit from '../assets/images-form/Eternit.jpg'
import ImagenMaderaTejasBarro from '../assets/images-form/madera-tejas-barro.jpg'
import ImagenMetalica from '../assets/images-form/metalica.jpg'
import { Context } from '../hooks/useCedula'


export const Formulario = () => {

  //Acá se guardan los datos de todos los campos
  const {cedula} = useContext(Context)
  const [anio, setAnio]= useState('')
  const [constructora, setConstructora]= useState('')
  const [nombreConstructora, setNombreConstructora]= useState('')
  const [area, setArea]= useState('')
  const [imagenVivienda, setImagenVivienda]= useState('')
  const [ubicacion, setUbicacion]= useState('')
  const [elementosCercanos, setElementosCercanos]= useState('')
  const [usoActual, setUsoActual]= useState('')
  const [usoDiferente, setUsoDiferente]= useState('')
  const [usoDiferenteAnterior, setUsoDiferenteAnterior]= useState('')
  const [usoPrimerPiso, setUsoPrimerPiso]= useState('')
  const [numeroPisos, setNumeroPisos]=useState('')
  const [pisoVivienda, setPisoVivienda]= useState('')
  const [sotanos, setSotanos]= useState('')
  const [comparteMuro, setComparteMuro]= useState('')
  const [equipos, setEquipos]= useState('')
  const [alturaPisos, setAlturaPisos]= useState('')
  const [materialConstruccion, setMaterialConstruccion]= useState('')
  const [tipoConstruccion, setTipoConstruccion]= useState('')
  const [tipoPiso, setTipoPiso]= useState('')
  const [tipoTecho, setTipoTecho]= useState('')
  const [hundimiento, setHundimiento]= useState('')
  const [imagenCercanaHundimiento, setImagenCercanaHundimiento]= useState('')
  const [imagenLejanaHundimiento, setImagenLejanaHundimiento]= useState('')
  const [grietas, setGrietas]= useState('')
  const [imagenCercanaGrietas, setImagenCercanaGrietas]= useState('')
  const [imagenLejanaGrietas, setImagenLejanaGrietas]= useState('')

  console.log(cedula);
  const convertToBase64= archivo => {

    return new Promise((resolve, reject) => {
      const reader= new FileReader()

      if( archivo ) {
        reader.readAsDataURL(archivo)
      }

      reader.onload= () => {
        resolve(reader.result)
      }

      reader.onerror= error => {
        reject(error)
      }
    })
  }

  const handleFilePhotoInputChange = async(e, trigger) => {
    let file= e.target.files[0]

    const base64= await convertToBase64(file)
    trigger(base64)
  }

  console.log(imagenVivienda);
  console.log(imagenCercanaHundimiento)
  console.log(imagenLejanaHundimiento)
  console.log(imagenLejanaGrietas)
  console.log(imagenCercanaGrietas)
  
  const handleSubmit= async(e) => {
    e.preventDefault()

    await fetch("http://127.0.0.1:5000/respuestas",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "cedula": cedula,
        "anio": anio,
        "constructora": constructora,
        "nombre_constructora": nombreConstructora,
        "area_vivienda": area,
        "imagen_vivienda": imagenVivienda,
        "ubicacion": ubicacion,
        "elementos_cercanos": elementosCercanos,
        "uso_actual": usoActual,
        "uso_diferente": usoDiferente,
        "uso_diferente_anterior": usoDiferenteAnterior,
        "uso_primer_piso": usoPrimerPiso,
        "numero_pisos": numeroPisos,
        "piso_vivienda": pisoVivienda,
        "sotanos": sotanos,
        "comparte_muro": comparteMuro,
        "equipos": equipos,
        "altura_pisos": alturaPisos,
        "material_construccion": materialConstruccion,
        "tipo_construccion": tipoConstruccion,
        "tipo_piso": tipoPiso,
        "tipo_techo": tipoTecho,
        "hundimiento": hundimiento,
        "imagen_lejana_hundimiento": imagenLejanaHundimiento,
        "imagen_cercana_hundimiento": imagenCercanaHundimiento,
        "grietas": grietas,
        "imagen_lejana_grieta": imagenLejanaGrietas,
        "imagen_cercana_grieta": imagenCercanaGrietas
      })
    })
  }

  return (
    <>
      <h1>Encuesta</h1>
      <AiOutlineForm size={"90px"} />
      <form className='form-group' onSubmit={handleSubmit}>
        <label className='pregunta'><b>1) </b>Año de construcción de la vivienda:</label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={(e) => setAnio(e.target.value)} value={'Antes de 1963'} />Antes de 1963
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={(e) => setAnio(e.target.value)} value={'Entre 1963 y 1984'} />Entre 1963 y 1984
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'Entre 1985 y 1997'} />Entre 1985 y 1997
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'Entre 1998 y 2010'} />Entre 1998 y 2010
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'A partir de 2001'} />A partir de 2001
          </label>
        </div>
        <label className='pregunta'><b>2) </b>¿Fue construida por  alguna entidad o empresa constructora? </label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={e => setConstructora(e.target.value)} value={'Si'} />Si
          </label>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={e => setConstructora(e.target.value)} value={'No'} />No
          </label>
        </div>
        <div className='respuestas opcional'>
          <label className='pregunta'><b>3) </b>Nombre de la empresa constructora(opcional): </label>
          <input type="text" onChange={e => setNombreConstructora(e.target.value)} value={nombreConstructora} placeholder='Digite el nombre de la empresa o entidad' />
        </div>
        <label className='pregunta'><b>4) </b>Área de la vivienda:  </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="20 a 30m^2" /> 20 a 30 m^2
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
        <div className="container-image">
          <input type="file" onChange={(e) => handleFilePhotoInputChange(e, setImagenVivienda)} name='q-5' accept='image/jepg image/jpg' />  
        </div>
        <label className="pregunta"><b>6) </b>Ubicación de la vivienda</label>
        <div className="respuestas">
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-6' value={'Ladera'} /><p>Ladera</p>
            <img src={ImagenLadera} onClick={e => setUbicacion(e.target.value)} alt="imagen ladera" className="img-ubicacion" />
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-6' onClick={e => setUbicacion(e.target.value)} value={'Valle'} /><p>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
        </div>
        <label className='pregunta'><b>7) </b>Elementos cercanos a la vivienda</label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type="radio" onClick={e => setElementosCercanos(e.target.value)} name='q-7' value={'Quebrada'} />Quebrada
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-7' value={'Valle'} onClick={e => setElementosCercanos(e.target.value)} /><p style={{ textAlign: "start" }}>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-7' value={'Montaña'} onClick={e => setElementosCercanos(e.target.value)} />Montaña
          </label>
        </div>
        <label className='pregunta'><b>8) </b>El uso actual predominante de la vivienda es: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-8' onClick={e => setUsoActual(e.target.value)} value={'Residencial'} />Residencial
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Comercial'} onClick={e => setUsoActual(e.target.value)} />Comercial
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Educacional'} onClick={e => setUsoActual(e.target.value)} />Educacional
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Oficinas'} onClick={e => setUsoActual(e.target.value)} />Oficinas
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Bodegas'} onClick={e => setUsoActual(e.target.value)} />Bodegas
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Instalación deportiva'} onClick={e => setUsoActual(e.target.value)} />Instalación deportiva
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Centro de Salud'} onClick={e => setUsoActual(e.target.value)} />Centro de Salud
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Industrial'} onClick={e => setUsoActual(e.target.value)} />Industrial
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Hotelero'} onClick={e => setUsoActual(e.target.value)} />Hotelero
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' />Otro: &nbsp; 
            <input type="text" className='otro' onChange={e => setUsoActual(e.target.value) } value={usoActual} placeholder='Digite' />
          </label>
        </div>
        <label className='pregunta'><b>9) </b>La vivienda anteriormente tuvo un uso diferente al actual: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-9' onClick={e => setUsoDiferente(e.target.value)} value="Si" />Si
          </label>
          <label className="seleccion">
            <input type={"radio"} name='q-9' onClick={e => setUsoDiferente(e.target.value)  } value="No" />No
          </label>
        </div>
        {
          usoDiferente == 'Si' && (
          <>
            <label className="pregunta"><b>9.1) </b>El uso de la vivienda anteriormente era: </label>
            <div className="respuestas">
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Residencial" />Residencial
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Comercial" />Comercial
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Educacional" />Educacional
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Oficinas" />Oficinas
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Instalacion deportiva" />Instalación deportiva
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Centro de salud" />Centro de salud
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Industrial" />Industrial
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Hotelero" />Hotelero
              </label>
              <label className='seleccion'>
                <input type="radio" name='q-8' />Otro: &nbsp; 
                <input type="text" className='otro' onChange={e => setUsoActual(e.target.value) } value={usoActual} placeholder='Digite' />
              </label>
            </div>
          </>
          )
        }
        <label className='pregunta'><b>10) </b>El uso de la vivienda del primer piso es: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Residencial"}  />Residencial
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Comercial"}  />Comercial
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Educacional"}  />Educacional
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Oficinas"}  />Oficinas
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Bodegas"}  />Bodegas
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Instalacion deportiva"}  />Instalación deportiva
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Centro de salud"}  />Centro de salud
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Industrial"}  />Industrial
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Hotelero"}  />Hotelero
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"No aplica"}  />No aplica
          </label>
        </div>
        <label className='pregunta'><b>11) </b>El total de pisos de la vivienda (si el edificio, casa o apartamento es de x pisos): </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"1"} />1
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"2"} />2
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"3"} />3
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"4"} />4
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"5"} />5
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"6"} />6
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"7 o mayores"} />7 o mayores
          </label>
        </div>
        <label className="pregunta"><b>12) </b>La vivienda se encuentra ubicada en el piso: </label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"1"} />1
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"2"} />2
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"3"} />3
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"4"} />4
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"5"} />5
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"6"} />6
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"7 o mayores"} />7 o  mayores
          </label>
        </div>
        <label  className="pregunta"><b>13) </b>Sótanos (incluye parqueaderos subterrános): </label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"Ninguno"} />Ninguno
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"1"} />1
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"2"} />2
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"3"} />3
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"4"} />4
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"Mayores a 5"} />Mayores a 5
          </label>
        </div>
        <label  className="pregunta"><b>14) </b>Comparte muros con los vecinos de al lado</label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"} name="q-14" value="Si" onClick={e => setComparteMuro(e.target.value)} /><p>Si</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name="q-14" value="" onClick={e => setComparteMuro(e.target.value)} /><p>No</p>
          </label>
        </div>
        <label className="pregunta"><b>15) </b>Hay presencia de equipos (grandes) dentro de la edificación</label>
        <div className="respuestas">
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Piscinas"} /><p>Piscinas</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Canchas"} /><p>Canchas</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Maquinas de gimnasio"} /><p>Máquinas de gimnasio</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Tanques de agua"} /><p>Tanques de agua</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Maquinaria industrial"} /><p>Maquinaria industrial</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Almacenamientos"} /><p>Almacenamientos</p>
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Ninguno de los anteriores"} /><p>Ninguno de los anteriores</p>
          </label>
          <label className='seleccion'>
                <input type="radio" name='q-15' onClick={ () => setEquipos('') } />Otro: &nbsp; 
                <input type="text" className='otro' onChange={e => setEquipos(e.target.value) } value={equipos} placeholder='Digite' />
          </label>
        </div>
        <label  className="pregunta"><b>16) </b>Altura entre pisos (el piso de la vivienda al techo): </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2 metros"} onClick={e => setAlturaPisos(e.target.value)}  /><p>2 metros</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2.1 a 2.5 metros"} onClick={e => setAlturaPisos(e.target.value)}  /><p>2.1 a 2.5 metros</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2.6 a 3 metros"} onClick={e => setAlturaPisos(e.target.value)}  /><p>2.6 a 3 metros</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"3.1 metros o mayores"} onClick={e => setAlturaPisos(e.target.value)}  /><p>3.1 metros o mayores</p>
          </label>
        </div>
        <label className="pregunta"><b>17) </b>Material de construcción: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Mamposteria'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Mampostería (Contrucción compuesta por ladrillos u otro material)</p>
            <img src={ImagenMamposteria} alt="mamposteria" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
              <input type="radio" name='q-17' value={'Concreto reforzado'} onClick={e => setMaterialConstruccion(e.target.value)} /><p>Concreto reforzado (Construcción compuesta por concreto y acero)</p>
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Prefabricado'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Prefabricado (Construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción)</p>
            <img src={ImagenPrefabricado} alt="prefabricado" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Acero'} onClick={e => setMaterialConstruccion(e.target.value)} /><p>Acero</p>
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Madera'} onClick={e => setMaterialConstruccion(e.target.value)} /><p>Madera</p>
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Adobe'} onClick={e => setMaterialConstruccion(e.target.value)} /><p>Adobe</p>
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Tapia'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Tapia</p>
            <img src={ImagenTapia} alt="tapia" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Guadua'} onClick={e => setMaterialConstruccion(e.target.value)} /><p>Guadua</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-17' />Otro: &nbsp; 
            <input type="text" className='otro' onChange={e => setMaterialConstruccion(e.target.value) } value={materialConstruccion} placeholder='Digite' />
          </label>
        </div>
        {
          materialConstruccion == 'Mamposteria' && (
            <>
              <label className="pregunta"><b>17.1) </b>Tipo de mampostería</label>
              <div className="respuestas">
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'Reforzada'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Reforzada (contiene acero al interior de la estructura)</p>
                  <img src={ImagenMamposteriaReforzda} alt="mamposteria reforzada" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'No reforzada'} onClick={e => setTipoConstruccion(e.target.value)} /><p>No reforzada (No contiene hierro al interior de la estructura, solo sería el adobe)</p>
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'Confinada'} onClick={e => setTipoConstruccion(e.target.value)} /><p>Confinada (muro al cual esta encerrado alrededor por vigas y columnas)</p>
                </label>
              </div>
            </>
          )
        }
        {
          materialConstruccion == 'Concreto reforzado' && (
            <>
              <label className="pregunta"><b>17.2) </b>Concreto reforzado: </label>
              <div className="respuestas">
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Muro estructural'} onClick={e => setTipoConstruccion(e.target.value)} /><p>Muro estructual (muro el cual no se puede quitar, ni modificar, ya que son muros que soportan la carga de la vivienda)</p>
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Portico'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Pórtico</p>
                  <img src={ImagenContretoPortico} alt="Portico" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Sistema dual o combinado'} onClick={e => setTipoConstruccion(e.target.value)} /><p>Sistema dual o combinado (muros estructurales y pórticos compuestos por vigas y columnas)</p>
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Prefabricado'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Prefabricado (construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción)</p>
                  <img src={ImagenPrefabricado} alt="Prefrabricado" className='img-material-construccion' />
                </label>
              </div>
            </>
          )
        }
        {
          materialConstruccion == 'Prefabricado' && (
            <>
              <label className="pregunta"><b>17.3) </b>Prefabricado: </label>
              <div className="respuestas">
              <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Yeso'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Yeso</p>
                  <img src={ImagenPrefabricadoYeso} alt="Yeso" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Madera'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Madera</p>
                  <img src={ImagenPrefabricadoMadera} alt="Madera" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'PVC'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>PVC</p>
                  <img src={ImagenPrefabricadoPVC} alt="PVC" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Drywall'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Drywall</p>
                  <img src={ImagenPrefabricadoDrywall} alt="Drywall" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Fibrocemento'} onClick={e => setTipoConstruccion(e.target.value)} /><p style={{ textAlign: "start" }}>Fibrocemento</p>
                  <img src={ImagenPrefabricadoFibrocemento} alt="Fibrocemento" className='img-material-construccion' />
                </label>
                <label className='seleccion'>
                  <input type="radio" name='q-17.3' />Otro: &nbsp; 
                  <input type="text" className='otro' onChange={e => setTipoConstruccion(e.target.value) } value={prefabricado} placeholder='Digite' />
                </label>
              </div>
            </>
          )
        }
        <label className="pregunta"><b>18) </b>Como se encuentra construido el piso de la vivienda: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Losa de concreto aligerado'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start" }}>Losa de concreto aligerado (conformada por concreto armado, estas se evidencian ya que forman una especie de cajón en el techo)</p>
            <img src={ImagenLosaConcretoAligerado} alt="Losa concreto aligerada" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Losa de concreto maciza'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start" }}>Losa de concreto maciza (conformada por concreto y acero)</p>
            <img src={ImagenLosaConcretoMaciza} alt="Losa concreto maciza" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Vigas de madera'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start" }}>Vigas de madera</p>
            <img src={ImagenPisoVigasMadera} alt="Vigas de madera" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Vigas de acero'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start" }}>Vigas de acero</p>
            <img src={ImagenPisoVigasAcero} alt="Vigas de acero" className='img-material-construccion' />
          </label>
        </div>
        <label className="pregunta"><b>19) </b>Tipo de techo o cubierta</label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Losa de concreto aligerada'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Losa de concreto aligerada (conformada por concreto armado, estas se evidencian ya que forman una espcie de cajón en el techo)</p>
            <img src={ImagenLosaConcretoAligerado} alt="Losa de concreto aligerada" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Losa de concreto maciza'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Losa de concreto maciza (conformada por concreto y acero)</p>
            <img src={ImagenLosaConcretoMaciza} alt="Losa de concreto aligerada" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Zinc'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Zinc</p>
            <img src={ImagenZinc} alt="Zinc" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Termina en plancha'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Termina en plancha</p>
            <img src={ImagenPlancha} alt="Plancha" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Placa facil'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Placa fácil</p>
            <img src={ImagenPlacaFacil} alt="Placa facil" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Eternit'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start"}}>Eternit</p>
            <img src={ImagenEternit} alt="Eternit" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Estructura de madera y tejas de barro'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Estructura de madera y tejas de barro</p>
            <img src={ImagenMaderaTejasBarro} alt="Estructura de madera y tejas de barro" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Metalica'} onClick={e => setTipoTecho(e.target.value)} /><p style={{ textAlign: "start" }}>Metálica</p>
            <img src={ImagenMetalica} alt="Metalica" className='img-material-construccion' />
          </label>
        </div>
        <label className="pregunta"><b>20) </b>La edificación presenta algúna asentamiento (hundimiento)</label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name="q-20" value={"Si"} onClick={ e => setHundimiento(e.target.value) } /><p>Si</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-20" value={"No"} onClick={ e => setHundimiento(e.target.value) } /><p>No</p>
          </label>
        </div>
        {
          hundimiento == "Si" && (
            <>
              <label className="pregunta"><b>20.1) </b>Suba 2 imagenes del hundimiento: </label>
              <div className="respuestas">
                <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>1) lejana al hundimiento horizontal</p>
                <div className="seleccion">
                  <input onChange={e => handleFilePhotoInputChange(e, setImagenLejanaHundimiento)} type="file" accept={"image/jepg image/jpg"} />
                </div>
                <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>2) Cercana con algún objeto con el que se pueda dimensionar (ejemplo: un lápiz o cuaderno al lado del hundimiento)</p>
                <div className="seleccion">
                  <input type="file" onChange={e => handleFilePhotoInputChange(e, setImagenCercanaHundimiento) } accept={"image/jepg image/jpg"} />
                </div>
              </div>
            </>
            )
        }
        <label className="pregunta"> <b>21) </b>Se evidencian grietas pronunciadas en los muros y/o columnas</label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-21' value={"Si"} onClick={ e => setGrietas(e.target.value) } /><p>Si</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-21' value={"No"} onClick={ e => setGrietas(e.target.value) } /><p>No</p>
          </label>
        </div>
        {
          grietas == 'Si' && (
            <>
              <label className="pregunta"><b>21.1) </b>Suba 2 imagenes de las grietas:</label>
              <div className="respuestas">
                <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>1) lejana a la grieta</p>
                <div className="seleccion">
                  <input onChange={e => handleFilePhotoInputChange(e, setImagenLejanaGrietas)} type="file" accept={"image/jepg image/jpg"} />
                </div>
                <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>2) 2.	Cercana con algún objeto con el que se pueda dimensionar. (ejemplo: un lápiz o cuaderno al lado de la grieta)</p>
                <div className="seleccion">
                  <input type="file" onChange={e => handleFilePhotoInputChange(e, setImagenCercanaGrietas) } accept={"image/jepg image/jpg"} />
                </div>
              </div>
            </>
          )
        }

        <button className='btn'>
          Enviar
        </button>
      </form>
    </>
  )
}

