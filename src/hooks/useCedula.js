import React, {createContext, useState} from "react";

const Context= createContext()

const Provider= ({children}) => {

    const [cedula, setCedula]= useState('')

    const value= {
        cedula, setCedula
    }

    return(
        <Context.Provider value={value}>
            {
                children
            }
        </Context.Provider>
    )
}

export {
    Provider, 
    Context
}
