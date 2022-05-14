import React, { useContext, useEffect, useState } from 'react'
import '../styles/Formulario.scss'
import { AiOutlineForm } from 'react-icons/ai'
import Swal from 'sweetalert2'
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
import { Context } from '../hooks/useQueryData'
import {AiOutlineCloudUpload} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'


export const Formulario = () => {


  const navigate= useNavigate()
  const {cedula} = useContext(Context)

  const [puntaje, setPuntaje]= useState(null)
  const [porcentajeVulnerabilidad, setPorcentajeVulnerabilidad]= useState(null)
  const [escalaVulnerabilidad, setEscalaVulnerabilidad]= useState(null)
  const [colorVulnerabilidad, setColorVulnerabilidad]= useState(null)
  //Acá se guardan los datos de todos los campos
  const [idEncuestado, setIdEncuestado]=useState(0)
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

  useEffect(async() => {
      
    await fetch(`http://127.0.0.1:5000/get-fka/${cedula}`)
      .then(data => data.json())
      .then(data => {console.log("data: ", data) 
    setIdEncuestado(Number(data.id_encuestado))})
      // .then(({id_encuestado}) => setIdEncuestado(Number(id_encuestado)))
      .catch(e => console.log(e))

  }, [])
  console.log("id encuestado", idEncuestado)
  useEffect(() => {

    let sumatoria= 0

    switch(anio){
      case 'Antes de 1963': sumatoria= sumatoria +4; 
        break;

      case 'Entre 1963 y 1984': sumatoria= sumatoria +3;
        break;

      case 'Entre 1985 y 1997': sumatoria= sumatoria + 3;
        break;
      
      case 'Entre 1998 y 2010': sumatoria= sumatoria +2;
        break;

      case 'A partir de 2011': sumatoria= sumatoria +1;
        break;
    }

    switch(constructora) {
      case 'Si': sumatoria= sumatoria +0;
        break;

      case 'No': sumatoria= sumatoria +3;
        break;
    }

    switch(ubicacion) {
      case 'Ladera': sumatoria= sumatoria +2;
        break;

      case 'Valle': sumatoria= sumatoria +1;
        break;
    }

    switch(elementosCercanos) {
      case 'Quebrada': sumatoria= sumatoria +2;
        break;

      case 'Valle': sumatoria= sumatoria +1;
        break;

      case 'Montaña': sumatoria= sumatoria +2;
        break; 
    }

    switch(usoActual) {
      case 'Residencial': sumatoria= sumatoria +0;
        break;

      case 'Comercial': sumatoria= sumatoria + 1;
        break;

      case 'Educacional': sumatoria= sumatoria +2;
        break;

      case 'Oficinas': sumatoria= sumatoria +2;
        break;

      case 'Bodegas': sumatoria= sumatoria +3;
        break;

      case 'Instalacion deportiva': sumatoria= sumatoria+3;
        break;

      case 'Centro de salud': sumatoria= sumatoria +2;
        break;

      case 'Industrial': sumatoria= sumatoria + 4;
        break;

      case 'Hotelero': sumatoria= sumatoria + 2;
        break;

      default: sumatoria= sumatoria +0;
        break;
    }

    switch(usoPrimerPiso) {
      case 'Residencial': sumatoria= sumatoria + 0;
        break;

      case 'Comercial': sumatoria= sumatoria + 1;
        break;

      case 'Educacional': sumatoria= sumatoria + 2;
        break;

      case 'Oficinas': sumatoria= sumatoria +2;
        break;

      case 'Bodegas': sumatoria= sumatoria + 3;
        break;

      case 'Instalacion deportiva': sumatoria= sumatoria + 3;
        break;

      case 'Centro de salud': sumatoria= sumatoria +2;
        break;

      case 'Industrial': sumatoria= sumatoria + 4;
        break;

      case 'Hotelero': sumatoria= sumatoria +2; 
        break;

      case 'No aplica': sumatoria= sumatoria + 0;
        break;
    }

    switch(numeroPisos) {
      case '1': sumatoria= sumatoria +1;
        break;

      case '2': sumatoria= sumatoria +1;
        break;

      case '3': sumatoria= sumatoria +1;
        break;
      
      case '4': sumatoria= sumatoria +2;
        break;

      case '5': sumatoria= sumatoria +2;
        break;

      case '6': sumatoria= sumatoria +2;
        break;

      case '7 o mayores': sumatoria= sumatoria= sumatoria +3;
        break;
    }

    switch(pisoVivienda) {
      case '1': sumatoria= sumatoria+ 1;
        break;

      case '2': sumatoria= sumatoria + 1;
        break;

      case '3': sumatoria= sumatoria +1;
        break;

      case '4': sumatoria= sumatoria + 2;
        break;

      case '5': sumatoria= sumatoria +2;
        break;

      case '6': sumatoria= sumatoria +2;
        break;

      case '7 o mayores': sumatoria= sumatoria +3;
        break;
    }

    switch(sotanos) {
      case 'Ninguno': sumatoria= sumatoria +0;
        break;

      case '1': sumatoria= sumatoria +1;
        break; 

      case '2': sumatoria= sumatoria +2;
        break;

      case '3': sumatoria= sumatoria + 3;
        break;

      case '4': sumatoria= sumatoria +3;
        break;

      case 'Mayores a 5': sumatoria= sumatoria +4;
        break;
    }

    switch(comparteMuro) {
      case 'Si': sumatoria= sumatoria +3;
        break;

      case 'No': sumatoria= sumatoria +0;
        break;
    }

    switch(equipos) {
      case 'Piscinas': sumatoria= sumatoria +4;
        break;

      case 'Canchas': sumatoria= sumatoria +3;
        break;

      case 'Maquinas de gimnasio': sumatoria= sumatoria +3;
        break;

      case 'Tanques de agua': sumatoria= sumatoria +4;
        break;

      case 'Maquinaria industrial': sumatoria= sumatoria + 4;
        break;

      case 'Almacenamientos': sumatoria= sumatoria + 3;
        break;

      case 'Ninguna de las anteriores': sumatoria= sumatoria + 0;
        break;

      default: sumatoria= sumatoria+ 0;
        break;
    }

    switch(alturaPisos) {
      case '2 metros': sumatoria= sumatoria+1;
        break;

      case '2.1 a 2.5 metros': sumatoria= sumatoria +2;
        break;

      case '2.6 a 3 metros': sumatoria= sumatoria + 3;
        break;
       
      case '3.1 metros o mayores': sumatoria= sumatoria +3;
        break;
    }

    switch(materialConstruccion) {
      case 'Mamposteria': sumatoria= sumatoria + 2;
        break;

      case 'Concreto reforzado': sumatoria= sumatoria+ 1;
        break;

      case 'Prefabricado': sumatoria= sumatoria +2;
        break;

      case 'Acero': sumatoria= sumatoria +1;
        break;
      
      case 'Madera': sumatoria= sumatoria +2;
        break;

      case 'Adobe': sumatoria= sumatoria + 3;
        break;
      
      case 'Tapia': sumatoria= sumatoria +3;
        break;

      case 'Guadua': sumatoria= sumatoria +3;
        break;
      
      default: sumatoria= sumatoria+0;
        break;
        
    }

    if(materialConstruccion === 'Mamposteria') {
      
      switch(tipoConstruccion) {
        case 'Reforzada': sumatoria= sumatoria +1;
          break;

        case 'No reforzada': sumatoria= sumatoria +1;
          break;
        
        case 'Confinada': sumatoria= sumatoria +1;
          break;
      }
    }

    if(materialConstruccion === 'Concreto reforzado') {
      
      switch(tipoConstruccion) {
        case 'Muro estructural': sumatoria= sumatoria +1;
          break;

        case 'Portico': sumatoria= sumatoria + 1;
          break;

        case 'Sistema dual o combinado': sumatoria= sumatoria +1;
          break;
        
        case 'Prefabricado': sumatoria= sumatoria +2;
          break;
      }
    }

    if(materialConstruccion === 'Prefabricado') {

      switch(tipoConstruccion) {
        case 'Yeso': sumatoria= sumatoria +2;
          break;

        case 'Madera': sumatoria= sumatoria + 2;
          break;

        case 'PVC': sumatoria= sumatoria +2;
          break;

        case 'Drywall': sumatoria= sumatoria +3;
          break;

        case 'Fibrocemento': sumatoria= sumatoria + 1;
          break;

        default: sumatoria= sumatoria + 0;
          break;
      }
    }

    switch(tipoPiso) {
      case 'Losa de concreto aligerado': sumatoria= sumatoria +1;
        break;

      case 'Losa de concreto maciza': sumatoria= sumatoria+1;
        break;

      case 'Vigas de madera': sumatoria= sumatoria +2;
        break;

      case 'Vigas de acero': sumatoria= sumatoria +1;
        break;
    }

    switch(tipoTecho) {
      case 'Losa de concreto aligerada': sumatoria= sumatoria +1;
        break;

      case 'Losa de concreto maciza': sumatoria= sumatoria +1;
        break;

      case 'Zinc': sumatoria= sumatoria +3;
        break;

      case 'Termina en plancha': sumatoria= sumatoria +1;
        break;

      case 'Placa facil': sumatoria= sumatoria +2;
        break;

      case 'Eternit': sumatoria= sumatoria+ 3;
        break;
      
      case 'Estructura de madera y tejas de barro': sumatoria= sumatoria +1;
        break;
      
      case 'Metalica': sumatoria= sumatoria +3;
        break;
    }

    switch(hundimiento) {
      case 'Si': sumatoria= sumatoria +4;
        break;

      case 'No': sumatoria= sumatoria +0;
        break;
    }

    switch(grietas) {
      case 'Si': sumatoria= sumatoria +3;
        break;
      
      case 'No': sumatoria= sumatoria +0;
        break;
    }

    setPuntaje(sumatoria)
    //Para calcular el porcentaje de vulnerabilidad
    let Porcentaje;
    Porcentaje= Number((sumatoria *100) / 60);

    Porcentaje= parseFloat(Porcentaje).toFixed(2)

    setPorcentajeVulnerabilidad(Porcentaje)

    if(Porcentaje >= 0 && Porcentaje <= 30){
      setEscalaVulnerabilidad("baja");
      setColorVulnerabilidad("#42f563")
    } else {

      if(Porcentaje >=31 && Porcentaje <= 60) {
        setEscalaVulnerabilidad("media");
        setColorVulnerabilidad("#f5f542");
      } else {

        if(Porcentaje >= 61 && Porcentaje <= 80) {
          setEscalaVulnerabilidad("alta");
          setColorVulnerabilidad("#ff9142");
        }else {
          setEscalaVulnerabilidad("extrema");
          setColorVulnerabilidad("#ff6842");
        }
      }
    }
    

  },[anio, constructora, ubicacion, elementosCercanos, usoActual, usoPrimerPiso, numeroPisos, pisoVivienda, sotanos, comparteMuro,
  equipos, alturaPisos, materialConstruccion, tipoConstruccion, tipoPiso, tipoTecho, hundimiento])
  
  console.log("Puntaje",puntaje)
  console.log(materialConstruccion);
  console.log("Porcentaje", porcentajeVulnerabilidad)
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
  
  const handleSubmit= async(e) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:5000/respuestas",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "id_encuestado": idEncuestado,
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
        "imagen_cercana_grieta": imagenCercanaGrietas,
        "escala_vulnerabilidad": escalaVulnerabilidad,
        "porcentaje": porcentajeVulnerabilidad
      })
    })
      .then(() => {
        navigate("/");

        if(escalaVulnerabilidad === "baja"){
          Swal.fire({
            title:`Escala de vulnerabilidad ${escalaVulnerabilidad}`,
            icon: "success",
            text: `Su casa se encuentra un ${porcentajeVulnerabilidad} vulnerable`
          });
        }
        if( escalaVulnerabilidad === 'media') {
          Swal.fire({
            title:`Escala de vulnerabilidad ${escalaVulnerabilidad}`,
            icon: "warning",
            iconColor: colorVulnerabilidad,
            text: `Su casa se encuentra un ${porcentajeVulnerabilidad} vulnerable`
          });
        }
        if( escalaVulnerabilidad === 'alta') {
          Swal.fire({
            title:`Escala de vulnerabilidad ${escalaVulnerabilidad}`,
            icon: "warning",
            iconColor: colorVulnerabilidad,
            text: `Su casa se encuentra un ${porcentajeVulnerabilidad} vulnerable`
          });
        }
        if( escalaVulnerabilidad === 'extrema') {
          Swal.fire({
            title:`Escala de vulnerabilidad ${escalaVulnerabilidad}`,
            icon: "error",
            iconColor: colorVulnerabilidad,
            text: `Su casa se encuentra un ${porcentajeVulnerabilidad} vulnerable`
          });
        }

      })
      .catch(e => {
        Swal.fire({
          title:`Error`,
          icon: "warning",
          text: `Debe completar todas las respuestas del formulario `
        });        
      })

  }

  return (
    <>
      <h1>Encuesta</h1>
      <AiOutlineForm size={"90px"} />
      <form className='form-group' onSubmit={handleSubmit}>
        <label className='pregunta'>Año de construcción de la vivienda:</label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={(e) => setAnio(e.target.value)} value={'Antes de 1963'} required /><p>Antes de 1963</p>
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={(e) => setAnio(e.target.value)} value={'Entre 1963 y 1984'} /><p>Entre 1963 y 1984</p>
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'Entre 1985 y 1997'} /><p>Entre 1985 y 1997</p>
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'Entre 1998 y 2010'} /><p>Entre 1998 y 2010</p>
          </label>
          <label className='seleccion' >
            <input name='q-1' type="radio" onClick={e => setAnio(e.target.value)} value={'A partir de 2011'} /><p>A partir de 2011</p>
          </label>
        </div>
        <label className='pregunta'>¿Fue construida por  alguna entidad o empresa constructora? </label>
        <div className='respuestas'>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={e => setConstructora(e.target.value)} value={'Si'} required /><p>Si</p>
          </label>
          <label className='seleccion' >
            <input name='q-2' type="radio" onClick={e => setConstructora(e.target.value)} value={'No'} /><p>No</p>
          </label>
        </div>
        {
          constructora == 'Si' && (
          <div className='respuestas opcional'>
            <label className='pregunta'>Nombre de la empresa constructora(opcional): </label>
            <input type="text" onChange={e => setNombreConstructora(e.target.value)} value={nombreConstructora} placeholder='Digite el nombre de la empresa o entidad' />
          </div>
          )
        }
        
        <label className='pregunta'>Área de la vivienda:  </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="20 a 30 m^2" required /> <p>20 a 30 m^2</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)}  value="31 a 40 m^2" /> <p>31 a 40 m^2</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="41 a 60 m^2" /> <p>41 a 60 m^2</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="61 a 80 m^2" /> <p>61 a 80 m^2</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="81 a 90 m^2" /> <p>81 a 90 m^2</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-4' onClick={e => setArea(e.target.value)} value="91 m^2 o mayor" /> <p>91 m^2 o mayor</p>
          </label>
        </div>
        <label className='pregunta'>Imagen del frente de la vivienda: </label>
        <div className="container-image">
          <input type="file" className="input-file" required id="imagen-vivienda" onChange={(e) => handleFilePhotoInputChange(e, setImagenVivienda)} name='q-5' accept='image/jepg image/jpg' />
          <label htmlFor="imagen-vivienda" style={{fontSize: "1.2rem", fontFamily:"var(--fuente-primaria)"}}><div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><AiOutlineCloudUpload size={"20px"} />Escoge un archivo</div></label>  
          <img src={imagenVivienda} className="image-input" />
        </div>
        <label className="pregunta">Ubicación de la vivienda</label>
        <div className="respuestas">
          <label className='seleccion ubicacion'>
            <input type="radio" onClick={e => setUbicacion(e.target.value)} name='q-6' value={'Ladera'} required /><p>Ladera</p>
            <img src={ImagenLadera}  alt="imagen ladera" className="img-ubicacion" />
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-6' onClick={e => setUbicacion(e.target.value)} value={'Valle'} /><p>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
        </div>
        <label className='pregunta'>Elementos cercanos a la vivienda</label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type="radio" onClick={e => setElementosCercanos(e.target.value)} name='q-7' value={'Quebrada'} required /><p>Quebrada</p>
          </label>
          <label className='seleccion ubicacion'>
            <input type="radio" name='q-7' value={'Valle'} onClick={e => setElementosCercanos(e.target.value)} /><p style={{ textAlign: "start" }}>Valle</p>
            <img src={ImagenValle} alt="imagen valle" className='img-ubicacion' />
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-7' value={'Montaña'} onClick={e => setElementosCercanos(e.target.value)} /><p>Montaña</p>
          </label>
        </div>
        <label className='pregunta'>El uso actual predominante de la vivienda es: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-8' onClick={e => setUsoActual(e.target.value)} value={'Residencial'} required /><p>Residencial</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Comercial'} onClick={e => setUsoActual(e.target.value)} /><p>Comercial</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Educacional'} onClick={e => setUsoActual(e.target.value)} /><p>Educacional</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Oficinas'} onClick={e => setUsoActual(e.target.value)} /><p>Oficinas</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-8' value={'Bodegas'} onClick={e => setUsoActual(e.target.value)} /><p>Bodegas</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Instalacion deportiva'} onClick={e => setUsoActual(e.target.value)} /><p>Instalación deportiva</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Centro de salud'} onClick={e => setUsoActual(e.target.value)} /><p>Centro de Salud</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Industrial'} onClick={e => setUsoActual(e.target.value)} /><p>Industrial</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' value={'Hotelero'} onClick={e => setUsoActual(e.target.value)} /><p>Hotelero</p>
          </label>
          <label className='seleccion'>
            <input type="radio" name='q-8' onClick={ () => setUsoActual('')} /><p>Otro: &nbsp;</p> 
            <input type="text" className='otro' onChange={e => setUsoActual(e.target.value) } value={usoActual} placeholder='Digite' />
          </label>
        </div>
        <label className='pregunta'>La vivienda anteriormente tuvo un uso diferente al actual: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-9' onClick={e => setUsoDiferente(e.target.value)} value="Si" required/><p>Si</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name='q-9' onClick={e => setUsoDiferente(e.target.value)  } value="No" /><p>No</p>
          </label>
        </div>
        {
          usoDiferente == 'Si' && (
          <>
            <label className="pregunta">El uso de la vivienda anteriormente era: </label>
            <div className="respuestas">
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Residencial" required /><p>Residencial</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Comercial" /><p>Comercial</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Educacional" /><p>Educacional</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Oficinas" /><p>Oficinas</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Instalacion deportiva" /><p>Instalación deportiva</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Centro de salud" /><p>Centro de salud</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Industrial" /><p>Industrial</p>
              </label>
              <label className="seleccion">
                <input type="radio" onClick={e => setUsoDiferenteAnterior(e.target.value)}  name='q-9.1' value="Hotelero" /><p>Hotelero</p>
              </label>
              <label className='seleccion'>
                <input type="radio" name='q-8' onClick={ () => setUsoDiferenteAnterior('')} />Otro: &nbsp; 
                <input type="text" className='otro' onChange={e => setUsoDiferenteAnterior(e.target.value) } value={usoDiferenteAnterior} placeholder='Digite' />
              </label>
            </div>
          </>
          )
        }
        <label className='pregunta'>El uso de la vivienda del primer piso es: </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Residencial"} required/><p>Residencial</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Comercial"}  /><p>Comercial</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Educacional"}  /><p>Educacional</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Oficinas"}  /><p>Oficinas</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Bodegas"}  /><p>Bodegas</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Instalacion deportiva"}  /><p>Instalación deportiva</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Centro de salud"}  /><p>Centro de salud</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Industrial"}  /><p>Industrial</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"Hotelero"}  /><p>Hotelero</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} onClick={e => setUsoPrimerPiso(e.target.value)} name="q-10" value={"No aplica"}  /><p>No aplica</p>
          </label>
        </div>
        <label className='pregunta'>El total de pisos de la vivienda (si el edificio, casa o apartamento es de x pisos): </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"1"} required /><p>1</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"2"} /><p>2</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"3"} /><p>3</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"4"} /><p>4</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"5"} /><p>5</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"6"} /><p>6</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name={"q-11"} onClick={e => setNumeroPisos(e.target.value)} value={"7 o mayores"} /><p>7 o mayores</p>
          </label>
        </div>
        <label className="pregunta">La vivienda se encuentra ubicada en el piso: </label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"1"} required /><p>1</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"2"} /><p>2</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"3"} /><p>3</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"4"} /><p>4</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"5"} /><p>5</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"6"} /><p>6</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name={"q-12"} onClick={e => setPisoVivienda(e.target.value)} value={"7 o mayores"} /><p>7 o  mayores</p>
          </label>
        </div>
        <label  className="pregunta">Sótanos (incluye parqueaderos subterrános): </label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"Ninguno"} required/><p>Ninguno</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"1"} /><p>1</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"2"} /><p>2</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"3"} /><p>3</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"4"} /><p>4</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"}  name="q-13" onClick={e => setSotanos(e.target.value)} value={"Mayores a 5"} /><p>Mayores a 5</p>
          </label>
        </div>
        <label  className="pregunta">Comparte muros con los vecinos de al lado</label>
        <div className="respuestas">
          <label className='seleccion'>
            <input type={"radio"} name="q-14" value="Si" onClick={e => setComparteMuro(e.target.value)} required /><p>Si</p>
          </label>
          <label className='seleccion'>
            <input type={"radio"} name="q-14" value="No" onClick={e => setComparteMuro(e.target.value)} /><p>No</p>
          </label>
        </div>
        <label className="pregunta">Hay presencia de equipos (grandes) dentro de la edificación</label>
        <div className="respuestas">
          <label  className="seleccion">
            <input type={"radio"} name="q-15" onClick={ e => setEquipos(e.target.value)} value={"Piscinas"} required /><p>Piscinas</p>
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
                <input type="radio" name='q-15' onClick={ () => setEquipos('') } /><p>Otro: &nbsp;</p> 
                <input type="text" className='otro' onChange={e => setEquipos(e.target.value) } value={equipos} placeholder='Digite' />
          </label>
        </div>
        <label  className="pregunta">Altura entre pisos (el piso de la vivienda al techo): </label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name="q-16" value={"2 metros"} onClick={e => setAlturaPisos(e.target.value)} required /><p>2 metros</p>
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
        <label className="pregunta">Material de construcción: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-17' value={'Mamposteria'} onClick={e => setMaterialConstruccion(e.target.value)} required /><p style={{ textAlign: "start" }}>Mampostería (Contrucción compuesta por ladrillos u otro material)</p>
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
            <input type="radio" name='q-17' /><p>Otro: &nbsp;</p> 
            <input type="text" className='otro' onChange={e => setMaterialConstruccion(e.target.value) } value={materialConstruccion} placeholder='Digite' />
          </label>
        </div>
        {
          materialConstruccion == 'Mamposteria' && (
            <>
              <label className="pregunta">Tipo de mampostería</label>
              <div className="respuestas">
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.1' value={'Reforzada'} onClick={e => setTipoConstruccion(e.target.value)} required /><p style={{ textAlign: "start" }}>Reforzada (contiene acero al interior de la estructura)</p>
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
              <label className="pregunta">Tipo deoncreto reforzado: </label>
              <div className="respuestas">
                <label className='seleccion material-construccion'>
                  <input type="radio" name='q-17.2' value={'Muro estructural'} onClick={e => setTipoConstruccion(e.target.value)} required /><p>Muro estructual (muro el cual no se puede quitar, ni modificar, ya que son muros que soportan la carga de la vivienda)</p>
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
        }{
          materialConstruccion == 'Prefabricado' && (
            <>
              <label className="pregunta">Tipo de prefabricado: </label>
              <div className="respuestas">
                <label className="seleccion material-construccion">
                  <input type="radio" name='q-17.3' value={"Yeso"} onClick={ e => setTipoConstruccion(e.target.value) } required /> <p style={{textAlign:"start"}}>Yeso</p>
                  <img src={ImagenPrefabricadoYeso} alt="Yeso" className='img-material-construccion' />
                </label>
                <label className="seleccion material-construccion">
                  <input type="radio" name="q-17.3" value={"Madera"} onClick={ e => setTipoConstruccion(e.target.value)} /><p style={{textAlign: "start"}}>Madera</p>
                  <img src={ImagenPrefabricadoMadera} alt="Madera" className='img-material-construccion' />
                </label>
                <label className="seleccion material-construccion">
                  <input type="radio" value={"PVC"} name="q-17.3" onClick= { e => setTipoConstruccion(e.target.value) } /><p style={{textAlign: "start"}}>PVC</p>
                  <img src={ImagenPrefabricadoPVC} alt="PVC" className='img-material-construccion' />
                </label>
                <label  className="seleccion material-construccion">
                  <input type="radio" name='q-17.3' value={"Drywall"} onClick={ e => setTipoConstruccion(e.target.value) } /><p style={{textAlign:"start"}}>Drywall</p>
                  <img src={ImagenPrefabricadoDrywall} alt="Drywall" className='img-material-construccion' />
                </label>
                <label className="seleccion material-construccion">
                  <input type="radio" name='q-17.3' value={"Fibrocemento"} onClick={ e => setTipoConstruccion(e.target.value) } /><p style={{textAlign:"start"}}>Fibrocemento</p>
                  <img src={ImagenPrefabricadoFibrocemento} alt="Fibrocemento" className='img-material-construccion' />
                </label>
                <label  className="seleccion">
                  <input type="radio" name="q-17.3" onClick={e => setTipoConstruccion('')} /><p style={{textAlign:"start"}}>Otro: &nbsp; </p>
                  <input type={"text"} className="otro" onChange={ e => setTipoConstruccion(e.target.value)} value={tipoConstruccion} placeholder="Digite" />
                </label>
              </div>
            </>
          )
        }
        <label className="pregunta">Como se encuentra construido el piso de la vivienda: </label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-18' value={'Losa de concreto aligerado'} onClick={e => setTipoPiso(e.target.value)} required /><p style={{ textAlign: "start" }}>Losa de concreto aligerado (conformada por concreto armado, estas se evidencian ya que forman una especie de cajón en el techo)</p>
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
        <label className="pregunta">Tipo de techo o cubierta</label>
        <div className="respuestas">
          <label className='seleccion material-construccion'>
            <input type="radio" name='q-19' value={'Losa de concreto aligerada'} onClick={e => setTipoTecho(e.target.value)} required /><p style={{ textAlign: "start" }}>Losa de concreto aligerada (conformada por concreto armado, estas se evidencian ya que forman una espcie de cajón en el techo)</p>
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
        <label className="pregunta">La edificación presenta algún asentamiento (hundimiento)</label>
        <div className="respuestas">
          <label className="seleccion">
            <input type={"radio"} name="q-20" value={"Si"} onClick={ e => setHundimiento(e.target.value) } required /><p>Si</p>
          </label>
          <label className="seleccion">
            <input type={"radio"} name="q-20" value={"No"} onClick={ e => setHundimiento(e.target.value) } /><p>No</p>
          </label>
        </div>
        {
          hundimiento == "Si" && (
            <>
              <label className="pregunta">Suba 2 imagenes del hundimiento: </label>
              <div className="respuestas">
                <div className="alternativas container-image">
                  <p style={{ textAlign: "start", marginBottom: "20px" }} className='seleccion'>1) lejana al hundimiento horizontal</p>

                  <input onChange={e => handleFilePhotoInputChange(e, setImagenLejanaHundimiento)} className="input-file" id="imagen-lejana-hundimiento" type="file" accept={"image/jepg image/jpg"} />
                  <label htmlFor="imagen-lejana-hundimiento" style={{ fontSize: "1.2rem", fontFamily: "var(--fuente-primaria)" }}><div style={{display:"flex", alignItems:"center", justifyContent:"center"}}> <AiOutlineCloudUpload size={"20px"} />Escoge un archivo</div></label>
                  <img src={imagenLejanaHundimiento} className="image-input" />
                </div>
                <div className="alternativas container-image">
                  <p style={{ textAlign: "start", marginBottom: "20px" }} className='seleccion'>2) Cercana con algún objeto con el que se pueda dimensionar (ejemplo: un lápiz o cuaderno al lado del hundimiento)</p>
                  <input type="file" onChange={e => handleFilePhotoInputChange(e, setImagenCercanaHundimiento)} id="imagen-cercana-hundimiento" className='input-file' accept={"image/jepg image/jpg"} />
                  <label htmlFor="imagen-cercana-hundimiento" style={{ fontSize: "1.2rem", fontFamily: "var(--fuente-primaria)" }}><div style={{display:"flex", alignItems:"center", justifyContent:"center"}}> <AiOutlineCloudUpload size={"20px"} /> Escoge un archivo</div></label>
                  <img src={imagenCercanaHundimiento} className="image-input" />
                </div>
              </div>
            </>
            )
        }
        <label className="pregunta">Se evidencian grietas pronunciadas en los muros y/o columnas</label>
        <div className="respuestas">
          <label className="seleccion">
            <input type="radio" name='q-21' value={"Si"} onClick={ e => setGrietas(e.target.value) } required /><p>Si</p>
          </label>
          <label className="seleccion">
            <input type="radio" name='q-21' value={"No"} onClick={ e => setGrietas(e.target.value) } /><p>No</p>
          </label>
        </div>
        {
          grietas == 'Si' && (
            <>
              <label className="pregunta">Suba 2 imagenes de las grietas:</label>
              <div className="respuestas">
                <div className="alternativas container-image">
                  <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>1) lejana a la grieta</p>
                  <input onChange={e => handleFilePhotoInputChange(e, setImagenLejanaGrietas)} type="file" className='input-file' id="imagen-lejana-grieta" accept={"image/jepg image/jpg"} />
                  <label htmlFor="imagen-lejana-grieta" style={{fontSize: "1.2rem", fontFamily:"var(--fuente-primaria)"}}><div style={{display:"flex", alignItems:"center", justifyContent:"center"}} > <AiOutlineCloudUpload size={"20px"} /> Escoge un archivo</div></label> 
                  <img src={imagenLejanaGrietas} className="image-input" />
                </div>
                <div className="alternativas container-image">
                  <p style={{textAlign: "start", marginBottom:"20px"}} className='seleccion'>2) 2.	Cercana con algún objeto con el que se pueda dimensionar. (ejemplo: un lápiz o cuaderno al lado de la grieta)</p>
                  <input type="file" onChange={e => handleFilePhotoInputChange(e, setImagenCercanaGrietas) } className="input-file" id="imagen-cercana-grieta" accept={"image/jepg image/jpg"} />
                  <label htmlFor="imagen-cercana-grieta" style={{fontSize: "1.2rem", fontFamily:"var(--fuente-primaria)"}}><div style={{display:"flex", alignItems:"center", justifyContent:"center"}} ><AiOutlineCloudUpload size={"20px"} />Escoge un archivo</div></label> 
                  <img src={imagenCercanaGrietas} className="image-input" />
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
