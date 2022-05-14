import React, { Fragment, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../hooks/useQueryData";
import '../styles/Card.scss';

const URI_BASE= "http://127.0.0.1:5000"

export const Card= () => {

    const {personalData, setPersonalData,
        respuestasExterior, setRespuestasExterior,
        respuestasInterior, setRespuestasInterior,
        respuestasGeneral,setRespuestasGeneral}= useContext(Context)

    useEffect(async() => {
        const getPersonalData= await fetch(`${URI_BASE}/get-data-personal`)
            .then(response => response.json())
            .then(response => setPersonalData(response))
            .catch(err => console.error(err))

        const getExteriorAnswers= await fetch(`${URI_BASE}/get-data-exterior`)
            .then(response => response.json())
            .then(response => setRespuestasExterior(response))
            .catch(err => console.error(err))

        const getGeneralrAnswers= await fetch(`${URI_BASE}/get-data-results`)
            .then(response => response.json())
            .then(response => setRespuestasGeneral(response))
            .catch(err => console.error(err))
        const getInteriorAnswers= await fetch(`${URI_BASE}/get-data-interior`)
            .then( response => response.json())
            .then(response => setRespuestasInterior(response))
            .catch(err => console.error(err))
        
    }, []);

    return (
        <div className="cards-container">
            {      
                personalData.map((persona, i) => {

                    return (
                    <Fragment key={persona.id_encuestado}>
                        <div className="card" key={persona.id_encuestado}>
                            <h3 className="title">Encuestado</h3>
                            <div className="row">
                                <div className="col">
                                    <h3>Nombre completo</h3>
                                    <div className="nombre-completo container">
                                        <p>{persona.primer_nombre}</p>
                                        <p>{persona.segundo_nombre}</p>
                                        <p>{persona.primer_apellido}</p>
                                        <p>{persona.segundo_apellido}</p>
                                    </div>
                                    <h3>Cédula</h3>
                                    <p>{persona.cedula}</p>
                                </div>
                                <div className="col">
                                    <div className="container address-id">
                                        <h3>Direccion</h3>
                                        <p>{persona.direccion}</p>
                                        <h3>Correo electrónico</h3>
                                        <p>{persona.email}</p>
                                        <h3>Teléfono</h3>
                                        <p>{persona.phone}</p>
                                    </div>
                                </div>
                                <div className="col vivienda">
                                    <div className="imagen-vivienda">
                                        <h3>Imagen vivienda</h3>
                                        <div className="imagen-container">
                                            <img src={Object(respuestasExterior[i]).imagen_vivienda} className="imagen-vivienda" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container escala">
                                        <h3>Escala de vulnerabilidad</h3>
                                        <p>{(Object(respuestasGeneral[i]).escala_vulnerabilidad)}</p>
                                        <h3>Nivel de alerta</h3>
                                        <div className="alert">
                                            <p>{Object(respuestasGeneral[i]).porcentaje}%</p>
                                            <div className={`square
                                                ${Object(respuestasGeneral[i]).escala_vulnerabilidad=== "baja" && 'baja'}
                                                ${Object(respuestasGeneral[i]).escala_vulnerabilidad=== 'media' && 'media'} 
                                                ${Object(respuestasGeneral[i]).escala_vulnerabilidad=== "alta" && 'alta'}
                                                ${Object(respuestasGeneral[i]).escala_vulnerabilidad=== 'extrema' && 'extrema'}`}></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row-see">
                            <NavLink to={`/card/${persona.id_encuestado}`} className="see-more">Ver más</NavLink>
                            </div>
                        </div>
                    </Fragment>
                    );
                })
            }
        </div>
    );
}