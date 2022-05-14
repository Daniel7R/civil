import React, {createContext, useState} from "react";

const Context= createContext()

const Provider= ({children}) => {

    const [cedula, setCedula]= useState('');
    const[personalData, setPersonalData]= useState([]);
    const[respuestasExterior, setRespuestasExterior]= useState([]);
    const [respuestasInterior, setRespuestasInterior]= useState([]);
    const[respuestasGeneral, setRespuestasGeneral]= useState([]);

    const value= {
        cedula, setCedula,
        personalData, setPersonalData,
        respuestasExterior, setRespuestasExterior,
        respuestasInterior, setRespuestasInterior,
        respuestasGeneral, setRespuestasGeneral
    };

    return(
        <Context.Provider value={value}>
            {
                children
            }
        </Context.Provider>
    ); 
}

export {
    Provider, 
    Context
}
