import React, { } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../hooks/useQueryData'
import { useContext } from 'react'
import '../styles/CardWithQuery.scss';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

export const CardWithQuery = () => {

  let defaultCenter;

  const {id}= useParams();
  let index;
  console.log(id);
  const {
    respuestasInterior,
    respuestasExterior,
    respuestasGeneral,
    personalData
  }= useContext(Context);

  for(let i= 0; i<respuestasExterior.length; i++) {
    if(respuestasExterior[i].id_encuestado == id) {
      index= i;
    }
  }

  defaultCenter= {
    lat: parseFloat(personalData[index].latitud),
    lng: parseFloat(personalData[index].longitud)
  };

  console.log(respuestasInterior[index])

  return (
    <div className='content'>
      <h1>Información general</h1>
      <div className='personal-info-and-general row-card'>
        <div className='col-personal'>
            <h3>Nombre Completo</h3>
            <p>{personalData[index].primer_nombre} {personalData[index].segundo_nombre} {personalData[index].primer_apellido} {personalData[index].segundo_apellido}</p>
            <h3>Número de cedula</h3>
            <p>{personalData[index].cedula}</p>
            <h3>Teléfono</h3>
            <p>{personalData[index].phone}</p> 
        </div>
        <div className="col-personal">           
            <h3>Departamento</h3>
            <p>{personalData[index].departamento}</p>
            <h3>Municipio</h3>
            <p>{personalData[index].municipio}</p>
            <h3>Barrio</h3>
            <p>{personalData[index].barrio}</p>
        </div>
        <div className='col-personal'>
          <h3>Dirección</h3>
          <p>{personalData[index].direccion}</p>
          <h3>Nivel de escolaridad</h3>
          <p>{personalData[index].escolaridad}</p>
          <h3>Escala de vulnerabilidad</h3>
          <div className="alert">
            <p>{respuestasGeneral[index].porcentaje}%</p>
            <div className={`square ${respuestasGeneral[index].escala_vulnerabilidad === "baja" && 'baja'} ${respuestasGeneral[index].escala_vulnerabilidad === 'media' && 'media'} 
                ${respuestasGeneral[index].escala_vulnerabilidad === "alta" && 'alta'} ${respuestasGeneral[index].escala_vulnerabilidad === 'extrema' && 'extrema'}`}></div>
          
          </div>
        </div>
        <div className='col-personal map'>
          <h3>Ubicación</h3>
          <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={{height: "200px", width: "100%", textAlign: "center"}}
            zoom={15} center={defaultCenter} >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <h1>Formulario</h1>
      <div className='respuestas-exterior row-card'>
        <div className="formulario-col">
          <h3>Año de construcción</h3>
          <p>{respuestasExterior[index].anio}</p>
          <h3>Constructora</h3>
          <p>{respuestasExterior[index].constructora}</p>
          <h3>Nombre constructora</h3>
          <p>{
            respuestasExterior[index].constructora !== undefined && 
              respuestasExterior[index].nombre_constructora 
            ||
            respuestasExterior[index].nombre_constructora === undefined && 'No aplica'
          }</p>
        </div>
        <div className="formulario-col">
          <h3>Área vivienda</h3>
          <p>{respuestasExterior[index].area_vivienda}</p>
          <h3>Elementos cercanos</h3>
          <p>{respuestasExterior[index].elementos_cercanos}</p>
          <h3>Comparte muro con vecinos</h3>
          <p>{respuestasExterior[index].comparte_muro}</p>
        </div>
        <div className='formulario-col'>
          <h3>Imagen vivienda</h3>
          <img src={respuestasExterior[index].imagen_vivienda} alt="Imagen vivienda" />
        </div>
        <div className='formulario-col'>
          <h3>Número de pisos</h3>
          <p>{respuestasExterior[index].numero_pisos}</p>
          <h3>Piso de la vivienda</h3>
          <p>{respuestasExterior[index].piso_vivienda}</p>
          <h3>Sótanos</h3>
          <p>{respuestasExterior[index].sotanos}</p>
        </div>
        <div className="formulario-col">
          <h3>Ubicación</h3>
          <p>{respuestasExterior[index].ubicacion}</p>
          <h3>Uso actual</h3>
          <p>{respuestasExterior[index].uso_actual}</p>
          <h3>Uso diferente</h3>
          <p>{respuestasExterior[index].uso_diferente}</p>
          <h3>Uso diferente anterior</h3>
          <p>
            {
            respuestasExterior[index].uso_diferente == "No" && "No aplica"
            ||
            respuestasExterior[index].uso_diferente == "Si" && respuestasExterior[index].uso_diferente_anterior
            }
          </p>
        </div>
        <div className="formulario-col">
          <h3>Uso del primer piso</h3>
          <p>{respuestasExterior[index].uso_primer_piso}</p>
          <h3>Altura entre pisos</h3>
          <p>{respuestasInterior[index].altura_pisos}</p>
          <h3>Material construcción</h3>
          <p>{respuestasInterior[index].material_construccion}</p>
          <h3>Tipo de construcción</h3>
          <p>
            {
              respuestasInterior[index].tipo_construccion !== '' && respuestasInterior[index].tipo_construccion
              ||
              respuestasInterior[index].tipo_construccion === '' && "No aplica"
            }
          </p>
        </div>
        <div className="formulario-col">
          <h3>Tipo de piso</h3>
          <p>{respuestasInterior[index].tipo_piso}</p>
          <h3>Tipo de techo</h3>
          <p>{respuestasInterior[index].tipo_techo}</p>
          <h3>Grietas</h3>
          <p>{respuestasInterior[index].grietas}</p>
          <h3>Hundimientos</h3>
          <p>{respuestasInterior[index].hundimiento}</p>
        </div>
        {
          respuestasInterior[index].grietas === 'Si' && (
            <>
            <div className="formulario-col">
              <h3>Imagen cercana de la grieta</h3>
              <img src={respuestasInterior[index].imagen_cercana_grieta} alt="Imagen cercana grieta" />
            </div>
            <div className="formulario-col">
              <h3>Imagen lejana de la grieta</h3>
              <img src={respuestasInterior[index].imagen_lejana_grieta} alt="Imagen lejana grieta" />
            </div>
            </>
          )
        }
        {
          respuestasInterior[index].hundimiento === "Si" && (
            <>
              <div className="formulario-col">
                <h3>Imagen cercana del hundimiento</h3>
                <img src={respuestasInterior[index].imagen_cercana_hundimiento} alt="Imagen cercana hundimiento" />
              </div>
              <div className="formulario-col">
                <h3>Imagen lejana del hundimiento</h3>
                <img src={respuestasInterior[index].imagen_lejana_hundimiento} alt="Imagen lejana hundimiento" />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
