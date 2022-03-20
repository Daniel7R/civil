import React, { Fragment, useEffect, useState } from 'react'
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
import ImagenPisoLosaConcretoAligerado from '../assets/images-form/Piso aligerado.jpg'
import ImagenPisoLosaConcretoMaciza from '../assets/images-form/Piso maciza.jpg'
import ImagenPisoVigasMadera from '../assets/images-form/Viga madera.png'
import ImagenPisoVigasAcero from '../assets/images-form/Viga acero.jpg'


export const Formulario = () => {

  //Acá se guardan los datos de todos los campos
  const [anio, setAnio]= useState('')
  const [constructora, setConstructora]= useState('')
  const [nombreConstructora, setNombreConstructora]= useState('')
  const [area, setArea]= useState('')
  //Aqui falta la imagen de la pregunta 5
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
  const [tipoMamposteria, setTipoMamposteria]= useState('')
  const [concretoReforzado, setConcretoReforzado]= useState('')
  const [prefabricado, setPrefabricado]= useState('')
  const [tipoPiso, setTipoPiso]= useState('')


  console.log(usoActual);
  
  return (
    <>
      <h1>Encuesta</h1>
      <AiOutlineForm size={"90px"} />
      <form className='form-group'>
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
        <input type="file" name='q-5' accept='image/*' />
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
            <input type={"radio"} name="q-14" value="Si" onClick={e => setComparteMuro(e.target.value)} />Si
          </label>
          <label className='seleccion'>
            <input type={"radio"} name="q-14" value="" onClick={e => setComparteMuro(e.target.value)} />No
          </label>
        </div>
        <label className="pregunta"><b>15) </b>Hay presencia de equipos (grandes) dentro de la edificación</label>
        <div className="respuestas">
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Piscinas"} />Piscinas
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Canchas"} />Canchas
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Maquinas de gimnasio"} />Máquinas de gimnasio
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Tanques de agua"} />Tanques de agua
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Maquinaria industrial"} />Maquinaria industrial
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Almacenamientos"} />Almacenamientos
          </label>
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Ninguno de los anteriores"} />Ninguno de los anteriores
          </label>
          <label className='seleccion'>
                <input type="radio" name='q-15' />Otro: &nbsp; 
                <input type="text" className='otro' onChange={e => setUsoActual(e.target.value) } value={equipos} placeholder='Digite' />
          </label>
        </div>
        <label  className="pregunta"><b>16) </b>Altura entre pisos (el piso de la vivienda al techo): </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2 metros"} onClick={e => setAlturaPisos(e.target.value)}  />2 metros
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2.1 a 2.5 metros"} onClick={e => setAlturaPisos(e.target.value)}  />2.1 a 2.5 metros
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2.6 a 3 metros"} onClick={e => setAlturaPisos(e.target.value)}  />2.6 a 3 metros
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"3.1 metros o mayores"} onClick={e => setAlturaPisos(e.target.value)}  />3.1 metros o mayores
          </label>
        </div>
        <label className="pregunta"><b>17) </b>Material de construcción: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Mamposteria'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Mampostería (Contrucción compuesta por ladrillos u otro material)</p>
            <img src={ImagenMamposteria} alt="mamposteria" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
              <input type="radio" name='q-17' value={'Concreto reforzado'} onClick={e => setMaterialConstruccion(e.target.value)} />Concreto reforzado (Construcción compuesta por concreto y acero)
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Prefabricado'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Prefabricado (Construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción)</p>
            <img src={ImagenPrefabricado} alt="prefabricado" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Acero'} onClick={e => setMaterialConstruccion(e.target.value)} />Acero
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Madera'} onClick={e => setMaterialConstruccion(e.target.value)} />Madera
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Adobe'} onClick={e => setMaterialConstruccion(e.target.value)} />Adobe
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Tapia'} onClick={e => setMaterialConstruccion(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Tapia</p>
            <img src={ImagenTapia} alt="tapia" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Guadua'} onClick={e => setMaterialConstruccion(e.target.value)} />Guadua
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
                  <input type="radio" name='q-17.1' value={'Reforzada'} onClick={e => setTipoMamposteria(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Reforzada (contiene acero al interior de la estructura)</p>
                  <img src={ImagenMamposteriaReforzda} alt="mamposteria reforzada" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'No reforzada'} onClick={e => setTipoMamposteria(e.target.value)} />No reforzada (No contiene hierro al interior de la estructura, solo sería el adobe)
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'Confinada'} onClick={e => setTipoMamposteria(e.target.value)} />Confinada (muro al cual esta encerrado alrededor por vigas y columnas)
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
                  <input type="radio" name='q-17.2' value={'Muro estructural'} onClick={e => setConcretoReforzado(e.target.value)} />Muro estructual (muro el cual no se puede quitar, ni modificar, ya que son muros que soportan la carga de la vivienda)
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Portico'} onClick={e => setConcretoReforzado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Pórtico</p>
                  <img src={ImagenContretoPortico} alt="Portico" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Sistema dual o combinado'} onClick={e => setConcretoReforzado(e.target.value)} />Sistema dual o combinado (muros estructurales y pórticos (compuestos por vigas y columnas))
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Prefabricado'} onClick={e => setConcretoReforzado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Prefabricado (construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción)</p>
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
                  <input type="radio" name='q-17.3' value={'Yeso'} onClick={e => setPrefabricado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Yeso</p>
                  <img src={ImagenPrefabricadoYeso} alt="Yeso" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Madera'} onClick={e => setPrefabricado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Madera</p>
                  <img src={ImagenPrefabricadoMadera} alt="Madera" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'PVC'} onClick={e => setPrefabricado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>PVC</p>
                  <img src={ImagenPrefabricadoPVC} alt="PVC" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Drywall'} onClick={e => setPrefabricado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Drywall</p>
                  <img src={ImagenPrefabricadoDrywall} alt="Drywall" className='img-material-construccion' />
                </label>
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.3' value={'Fibrocemento'} onClick={e => setPrefabricado(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Fibrocemento</p>
                  <img src={ImagenPrefabricadoFibrocemento} alt="Fibrocemento" className='img-material-construccion' />
                </label>
                <label className='seleccion'>
                  <input type="radio" name='q-17.3' />Otro: &nbsp; 
                  <input type="text" className='otro' onChange={e => setPrefabricado(e.target.value) } value={prefabricado} placeholder='Digite' />
                </label>
              </div>
            </>
          )
        }
        <label className="pregunta"><b>18) </b>Como se encuentra construido el piso de la vivienda: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Losa de concreto aligerado'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Losa de concreto aligerado (conformada por concreto armado, estas se evidencian ya que forman una especie de cajón en el techo)</p>
            <img src={ImagenPisoLosaConcretoAligerado} alt="Losa concreto aligerada" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Losa de concreto maciza'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Losa de concreto maciza (conformada por concreto y acero)</p>
            <img src={ImagenPisoLosaConcretoMaciza} alt="Losa concreto maciza" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Vigas de madera'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Vigas de madera</p>
            <img src={ImagenPisoVigasMadera} alt="Vigas de madera" className='img-material-construccion' />
          </label>
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Vigas de acero'} onClick={e => setTipoPiso(e.target.value)} /><p style={{ textAlign: "start", width: "60%" }}>Vigas de acero</p>
            <img src={ImagenPisoVigasAcero} alt="Vigas de acero" className='img-material-construccion' />
          </label>
        </div>
      </form>
    </>
  )
}

